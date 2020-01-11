import { RecipeDetails } from './models/recipe-details';
import { Recipe} from './models/recipe';
import find from 'lodash/find';
import { FilterBy } from './consts';
import { RecipeList } from './models/recipe-list';

let recipes: Recipe[] = [];

export class RecipeManager {

  /**
   * Add Recipe
   * @param {Recipe} recipe [description]
   */
  addRecipe (recipe: Recipe): void {
    recipes.push(recipe);
  }


  /**
   * Get Recipe by id
   * @param  {number}         id
   * @return {Recipe}
   */
  getRecipe (id: number): Recipe|undefined {
    return find(recipes, recipe => recipe.id === id);
  }


  /**
   * Delete Recipe by id
   * @param {number} id
   */
  delete (id: number): void {
    recipes = recipes.filter((recipe) => recipe.id !== id)
  }


  /**
   * Get Recipies list filtred
   * @param  {FilterBy}      filterBy [description]
   * @param  {string|number} value    [description]
   * @return {RecipeList}             [Objects: {recipies: Array, total: int}]
   */
  getRecipesFilteredBy (filterBy: FilterBy, value: string|number): RecipeList {
     const recipeList = RecipeManager.prepareRecipesList((recipe) => recipe[filterBy] === value);
     return {
       recipes: recipeList,
       total: recipeList.length
     };
  }

  private static prepareRecipesList(filterFunction: (recipe: Recipe) => boolean): RecipeList['recipes'] {
    return recipes
      .filter(filterFunction)
      .map((recipe) => {
        return recipe
      });
  }
}