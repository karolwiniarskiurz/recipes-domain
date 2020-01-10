import { Recipe } from './recipe';

export class RecipeList {
  recipes: Recipe[];
  total: number;

  constructor(recipies: Recipe[], total: number) {
    this.recipes = recipes;
    this.total = total;
  }
}