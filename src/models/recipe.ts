import { Author } from './author';
import { RecipieDetails } from './recipie-details';

export class Recipe {
  id: number;
  name: string;
  description: string;
  mainImageLink: string;
  author: Author;
  details: RecipieDetails;

  constructor(id: number, name: string, description: string, mainImageLink: string, author: Author, details: RecipieDetails) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.mainImageLink = mainImageLink;
    this.author = author;
    this.details = details;
  }
}
