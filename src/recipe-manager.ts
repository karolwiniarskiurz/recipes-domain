import { RecipieDetailsInterface } from './interfaces/recipie-details-interface';
import find from 'lodash/find';
import { FilterBy } from './consts';
import { RecipeListInterface } from './interfaces/recipe-list-interface';

let recipes: RecipieDetailsInterface[] = [];

export class RecipeManager {

  addRecipe (recipe: RecipieDetailsInterface): void {
    recipes.push(recipe);
  }

  getRecipe (id: number): RecipieDetailsInterface|undefined {
    return find(recipes, recipe => recipe.id === id);

  }

  delete (id: number): void {
    recipes = recipes.filter((recipe) => recipe.id !== id)
  }

  getRecipiesFilteredBy (filterBy: FilterBy, value: string|number): RecipeListInterface {
     const recipeList = RecipeManager.prepareRecipesList((recipe) => recipe[filterBy] === value);

     return {
       recipies: recipeList,
       total: recipeList.length
     };

  }

  private static prepareRecipesList(filterFunction: (recipe: RecipieDetailsInterface) => boolean): RecipeListInterface['recipies'] {
    return recipes
      .filter(filterFunction)
      .map((recipe) => {
        return {
          id: recipe.id,
          name: recipe.name,
          author: recipe.author,
          mainImageLink: recipe.mainImageLink,
          description: recipe.description
        }
      });
  }
}