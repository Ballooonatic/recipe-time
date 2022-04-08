import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { Recipe } from './interfaces/recipe.interface';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  recipesSubscription: Subscription;
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.recipesSubscription = this.recipeService.getRecipes().subscribe(res => {
      this.recipes = res as Recipe[];
      this.openDialog(this.recipes[0])
    });
  }

  openDialog(recipe) {
    this.dialog.open(RecipeDetailComponent, { data: recipe });
  }

  ngOnDestroy() {
    this.recipesSubscription.unsubscribe();
  }

}