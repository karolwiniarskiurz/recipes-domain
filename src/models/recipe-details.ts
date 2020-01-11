import { Author } from './author';
import { Nutritients } from './nutritients';
import { Indigrent } from './indigrent';
import { Recipe } from './recipe';
import { RecipeLevel } from '../enums/recipe-level';

export class RecipeDetails extends Recipe {
  imageLinks: string[];
  steps: string[];
  timeToCook: number;
  level: RecipeLevel;
  indigrents: Indigrent[];
  nutritiens: Nutritients;

  constructor(
    id: number,
    name: string,
    description: string,
    mainImageLink: string,
    author: Author,
    imageLinks: string[],
    steps: string[],
    timeToCook: number,
    level: RecipeLevel,
    indigrents: Indigrent[],
    nutritiens: Nutritients
  ) {
    super(id, name, description, mainImageLink, author);
    this.imageLinks = imageLinks;
    this.steps = steps;
    this.timeToCook = timeToCook;
    this.level = level;
    this.indigrents = indigrents;
    this.nutritiens = nutritiens;
  }

}
