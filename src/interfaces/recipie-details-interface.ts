import { AuthorInterface } from './author-interface';
import { NutritientsInterface } from './nutritients-interface';

export interface RecipieDetailsInterface {
  id: number;
  name: string;
  description: string;
  mainImageLink: string;
  imageLinks: string;
  author: AuthorInterface;
  steps: string[];
  timeToCook: number;
  level: number;
  indigrents: string[];
  nutritiens: NutritientsInterface;
}
