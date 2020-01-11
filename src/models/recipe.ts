import { Author } from './author';

export class Recipe {
  id: number;
  name: string;
  description: string;
  mainImageLink: string;
  author: Author;

  constructor(id: number, name: string, description: string, mainImageLink: string, author: Author) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.mainImageLink = mainImageLink;
    this.author = author;
  }
}
