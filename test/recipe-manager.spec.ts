import { RecipeManager } from '../src/recipe-manager';
import { Recipe } from '../src/models/recipe';
import { Author } from '../src/models/author';
import { RecipeDetails } from '../src/models/recipe-details';
import { Indigrent } from '../src/models/indigrent';
import { Nutritients } from '../src/models/nutritients';
import { EntityNotFoundException } from '../src/exceptions/entity-not-found';
import { EntityExistsException } from '../src/exceptions/entity-exists';


describe('RecipeManager', () => {

    let manager: RecipeManager;
    let recipes: Recipe[];

    beforeEach(() => {

        const indigrents = [
            new Indigrent('chleb testowy'),
            new Indigrent('polędwica'),
            new Indigrent('szynka'),
            new Indigrent('podłużne paski salami pepperoni'),
            new Indigrent('podłużne paski kiełbasy;'),
            new Indigrent('lastry sera typu mozarella.')
        ];


        const author = new Author(1, 'Jan', 'Kowalski', '123456', 'jan@kowalski.pl', ['frytki']);
        const nutritiens = new Nutritients(1000, 55, 155, 444);
        const details = new RecipeDetails(
            1,
            'Francesinha',
            'Portugalskie danie w formie kanapki pochodzące z Porto, jedna z odmian zapiekanki Croque',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Francesinha_%285868450579%29.jpg/302px-Francesinha_%285868450579%29.jpg',
            author,
            ['https://img.test.pl'],
            ['W pierwszej kolejności zaczynamy od przygotowania sosu.', 'Na patelni podsmaż polędwicę lekko osoloną oraz plasterki kiełbasy peperoni oraz zwykłej, możesz również wybrać opcje grillowania ich', 'Przygotuj naczynie żaroodporne, ułóż w nim pierwszą kromkę chleba, na niej połóż polędwice, na niej oba rodzaje kiełbas, a na górze plasterek szynki teraz przykryj to drugą kromką. Na wierzch połóż dwa plasterki mozarelli i włóż do piekarnika na około 8 minut tak by ser się rozpuścił.', 'Podawaj w głębokim naczyniu z frytkami, nie zapomnij polać kanapki sosem.'],
            30,
            1,
            indigrents,
            nutritiens
        );

        recipes = [details]
        manager = new RecipeManager(recipes)
    })

    it('should add new recipe', () => {
        const recipe = new Recipe(2, 'name', 'description', 'http://image.com/image.jpg', {} as Author)
        manager.addRecipe(recipe);
        expect(manager.recipes.length).toBe(2)
    })

    it('should throw EntityExistsException when addRecipe with not unique id', () => {
        const recipe = new Recipe(1, 'name', 'description', 'http://image.com/image.jpg', {} as Author)
        const addFn = () => manager.addRecipe(recipe)
        expect(addFn).toThrow(new EntityExistsException())
    })


    it('should delete recipe by id', () => {
        manager.delete(1);
        expect(manager.recipes.length).toBe(0)
    });

    it('should throw EntityNotFoundException when trying to delete non existend recipe', () => {
        const deleteFn = () => manager.delete(2);
        expect(deleteFn).toThrow(new EntityNotFoundException())
    })

    it('should get recipe by id', () => {
        const recipe = manager.getRecipe(1);
        expect(recipe).toBeTruthy();
    });

    it('should throw EntityNotFoundException when getRecipe did not found recipe', () => {
        const getByIdFN = () => manager.getRecipe(2)
        expect(getByIdFN).toThrow(new EntityNotFoundException())
    })

    it('should list all recipes when listRecipes called', () => {
        const recipesList = manager.listRecipes()
        expect(recipesList.total).toBe(1)
        expect(recipesList.recipes).toEqual(recipes)
    })

})