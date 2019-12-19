import { Recipe } from './recipe';

export class RecipeList {
  recipies: Recipe[];
  total: number;

  constructor(recipies: Recipe[], total: number) {
    this.recipies = recipies;
    this.total = total;
  }
}