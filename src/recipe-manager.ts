import { RecipeDetails } from './models/recipe-details';
import { Recipe } from './models/recipe';
import find from 'lodash/find';
import { FilterBy } from './consts';
import { RecipeList } from './models/recipe-list';
import { EntityNotFoundException } from './exceptions/entity-not-found';
import { EntityExistsException } from './exceptions/entity-exists';

export class RecipeManager {
  recipes: Recipe[];

  constructor(recipes: Recipe[] = []) {
    this.recipes = recipes;
  }

  /**
   * Add Recipe
   * @param {Recipe} recipe [description]
   */
  addRecipe(recipe: Recipe): void {
    let r = undefined;
    try {
      r = this.getRecipe(recipe.id);
    } catch{
    }

    if (r) {
      throw new EntityExistsException();
    } else {
      this.recipes.push(recipe);
    }
  }


  /**
   * Get Recipe by id
   * @param  {number}         id
   * @return {Recipe}
   */
  getRecipe(id: number): Recipe {
    const recipe = find(this.recipes, recipe => recipe.id === id)
    if (!recipe) {
      throw new EntityNotFoundException()
    }
    return recipe;
  }


  /**
   * Delete Recipe by id
   * @param {number} id
   */
  delete(id: number): void {
    const recipe = this.getRecipe(id);
    if (recipe) {
      this.recipes = this.recipes.filter((recipe) => recipe.id !== id)
    } else {
      throw new EntityNotFoundException()
    }
  }

  listRecipes(): RecipeList {
    return new RecipeList(this.recipes, this.recipes.length);
  }

  /**
   * Get Recipies list filtred
   * @param  {FilterBy}      filterBy [description]
   * @param  {string|number} value    [description]
   * @return {RecipeList}             [Objects: {recipies: Array, total: int}]
   */
  getRecipesFilteredBy(filterBy: FilterBy, value: string | number): RecipeList {
    const recipeList = RecipeManager.prepareRecipesList(this.recipes, (recipe) => recipe[filterBy] === value);
    return {
      recipes: recipeList,
      total: recipeList.length
    };
  }

  private static prepareRecipesList(recipes: Recipe[], filterFunction: (recipe: Recipe) => boolean): RecipeList['recipes'] {
    return recipes
      .filter(filterFunction)
      .map((recipe) => {
        return recipe
      });
  }
}