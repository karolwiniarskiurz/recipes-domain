import { RecipieDetails } from './classes/recipie-details';
import find from 'lodash/find';
import { FilterBy } from './consts';
import { RecipeList } from './classes/recipe-list';

let recipes: RecipieDetails[] = [];

export class RecipeManager {

  addRecipe (recipe: RecipieDetails): void {
    recipes.push(recipe);
  }

  getRecipe (id: number): RecipieDetails|undefined {
    return find(recipes, recipe => recipe.id === id);

  }

  delete (id: number): void {
    recipes = recipes.filter((recipe) => recipe.id !== id)
  }

  getRecipiesFilteredBy (filterBy: FilterBy, value: string|number): RecipeList {
     const recipeList = RecipeManager.prepareRecipesList((recipe) => recipe[filterBy] === value);

     return {
       recipies: recipeList,
       total: recipeList.length
     };

  }

  private static prepareRecipesList(filterFunction: (recipe: RecipieDetails) => boolean): RecipeList['recipies'] {
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