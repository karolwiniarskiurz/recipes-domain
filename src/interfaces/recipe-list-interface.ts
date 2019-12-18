import { RecipeInterface } from './recipe-interface';

export interface RecipeListInterface {
  id: number;
  recipies: RecipeInterface[];
  pageSize: number;
  hasMore: boolean;
  total: number;
}