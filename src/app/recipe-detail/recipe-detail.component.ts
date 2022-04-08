import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';
import { Recipe } from '../interfaces/recipe.interface';
import { Special } from '../interfaces/specials.interface';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  specialsSubscription: Subscription;
  recipe: Recipe;
  specials: Special[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Recipe,
    private recipeService: RecipeService
  ) {
    this.recipe = this.data;
  }

  ngOnInit() {
    this.specialsSubscription = this.recipeService.getSpecials().subscribe(res => {
      this.specials = (res as Special[]) // wonder if this is the best way. it thought it was "Object" type at first so i couldn't filter it
    })
  }

  ngOnDestroy() {
    this.specialsSubscription.unsubscribe();
  }
}
