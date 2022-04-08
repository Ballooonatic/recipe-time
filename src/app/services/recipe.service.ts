import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient
  ) { }

  getRecipes(): Observable<Object> { // it doesn't like my recipe interface for some reason...
    return this.http.get('http://localhost:3001/recipes')
  }

  getSpecials(): Observable<Object> {
    return this.http.get('http://localhost:3001/specials')
  }
}
