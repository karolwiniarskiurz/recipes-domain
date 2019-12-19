import { AuthorInterface } from './author-interface';

export interface RecipeInterface {
  id: number;
  name: string;
  description: string;
  mainImageLink: string;
  author: AuthorInterface;
}
