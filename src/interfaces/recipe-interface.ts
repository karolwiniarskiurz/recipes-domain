import { AuthorInterface } from './author-interface';

export interface RecipeInterface {
  id: number;
  name: string;
  description: string;
  author: AuthorInterface;
}
