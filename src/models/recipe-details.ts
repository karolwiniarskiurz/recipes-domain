import { Author } from './author';
import { Nutritients } from './nutritients';
import { Indigrent } from './indigrent';

export class RecipeDetails {
  id: number;
  name: string;
  description: string;
  mainImageLink: string;
  imageLinks: string;
  steps: string[];
  timeToCook: number;
  level: number;
  indigrents: Indigrent[];
  nutritiens: Nutritients;

  constructor(
    id: number,
    name: string,
    description: string,
    mainImageLink: string,
    imageLinks: string,
    steps: string[],
    timeToCook: number,
    level: number,
    indigrents: Indigrent[],
    nutritiens: Nutritients
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.mainImageLink = mainImageLink;
    this.imageLinks = imageLinks;
    this.steps = steps;
    this.timeToCook = timeToCook;
    this.level = level;
    this.indigrents = indigrents;
    this.nutritiens = nutritiens;
  }

}
