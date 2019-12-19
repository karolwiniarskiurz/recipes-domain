import { Author } from './author';
import { Nutritients } from './nutritients';

export class RecipieDetails {
  id: number;
  name: string;
  description: string;
  mainImageLink: string;
  imageLinks: string;
  author: Author;
  steps: string[];
  timeToCook: number;
  level: number;
  indigrents: string[];
  nutritiens: Nutritients;

  constructor(
    id: number,
    name: string,
    description: string,
    mainImageLink: string,
    imageLinks: string,
    author: Author,
    steps: string[],
    timeToCook: number,
    level: number,
    indigrents: string[],
    nutritiens: Nutritients
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.mainImageLink = mainImageLink;
    this.imageLinks = imageLinks;
    this.author = author;
    this.steps = steps;
    this.timeToCook = timeToCook;
    this.level = level;
    this.indigrents = indigrents;
    this.nutritiens = nutritiens;
  }

}
