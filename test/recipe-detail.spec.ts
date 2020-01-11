import { RecipeDetails } from "../src/models/recipe-details"
import { Author } from "../src/models/author"
import { RecipeLevel } from "../src/enums/recipe-level";
import { Nutritients } from "../src/models/nutritients";

describe('RecipeDetail', () => {
    it('should create', () => {
        const author = new Author(1, 'name', 'lastname', 'password', 'email', []);
        const nutritients = new Nutritients(1, 2, 3, 4);
        const recipeDetail = new RecipeDetails(1, 'name', 'description', 'mainImageLink', author, [], [], 10, RecipeLevel.EASY, [], nutritients)
    })
})