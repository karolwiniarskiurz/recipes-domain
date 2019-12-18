import { RecipieDetailsInterface } from './interfaces/recipie-details-interface';
import find from 'lodash/find';
import { FilterBy } from './consts';

let recipes: RecipieDetailsInterface[] = [];

export class RecipeManager {
  constructor(recipe: RecipieDetailsInterface) {
    recipes.push(recipe);
  }

  getRecipe (id: number): RecipieDetailsInterface|undefined {
    return find(recipes, recipe => recipe.id === id);

  }

  delete (id: number) {
    recipes = recipes.filter((recipe) => recipe.id !== id)
  }

  getRecipiesFilteredBy (filterBy: FilterBy, ascending: boolean) {
    // @TODO
  }
}