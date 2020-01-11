import { Recipe } from "../src/models/recipe"
import { Author } from "../src/models/author";

describe('Recipe', () => {
    it('should create', () => {
        const author = new Author(1, 'Jan', 'Kowalski', '123456', 'jan@kowalski.pl', ['frytki']);
        const recipe = new Recipe(1, 'name', 'descr', 'http://example.com/img.jpg', author)
        expect(recipe).toBeTruthy();
    })
})