export class Author {
  id: number;
  name: string;
  lastName: string;
  password: string;
  email: string;
  favorites: string[];

  constructor(id: number, name: string, lastName: string, password: string, email: string, favorites: string[]) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.favorites = favorites;
  }
}
