import { RecipeManager } from '../src/recipe-manager';
import { Recipe } from '../src/models/recipe';
import { Author } from '../src/models/author';
import { RecipeDetails } from '../src/models/recipe-details';
import { Indigrent } from '../src/models/indigrent';
import { Nutritients } from '../src/models/nutritients';


describe('RecipeManager', () => {

    const manager = new RecipeManager();

    it('should add new recipe', () => {

        // TODO: mockup objects
        
        const indigrents = [
            new Indigrent('chleb testowy'),
            new Indigrent('polędwica'),
            new Indigrent('szynka'),
            new Indigrent('podłużne paski salami pepperoni'),
            new Indigrent('podłużne paski kiełbasy;'),
            new Indigrent('lastry sera typu mozarella.')
        ];

        const nutritiens = new Nutritients(1000, 55, 155, 444);
        const details = new RecipeDetails(
            1,
            'Francesinha',
            'Portugalskie danie w formie kanapki pochodzące z Porto, jedna z odmian zapiekanki Croque', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Francesinha_%285868450579%29.jpg/302px-Francesinha_%285868450579%29.jpg',
            'https://img.test.pl',
            ['W pierwszej kolejności zaczynamy od przygotowania sosu.','Na patelni podsmaż polędwicę lekko osoloną oraz plasterki kiełbasy peperoni oraz zwykłej, możesz również wybrać opcje grillowania ich', 'Przygotuj naczynie żaroodporne, ułóż w nim pierwszą kromkę chleba, na niej połóż polędwice, na niej oba rodzaje kiełbas, a na górze plasterek szynki teraz przykryj to drugą kromką. Na wierzch połóż dwa plasterki mozarelli i włóż do piekarnika na około 8 minut tak by ser się rozpuścił.', 'Podawaj w głębokim naczyniu z frytkami, nie zapomnij polać kanapki sosem.'],
            30,
            1,
            indigrents,
            nutritiens
        );

        const author = new Author(1, 'Jan', 'Kowalski','123456', 'jan@kowalski.pl', ['frytki']);
        const recipe = new Recipe(
            1,
            'Francesinha', 
            'Portugalskie danie w formie kanapki pochodzące z Porto, jedna z odmian zapiekanki Croque', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Francesinha_%285868450579%29.jpg/302px-Francesinha_%285868450579%29.jpg',
            author,
            details
        );

        manager.addRecipe(recipe);
    })

    it('should get recipe by id', () => {
        const recipe = manager.getRecipe(1);
        expect(typeof recipe).toBe('object');
    });

    it('should delete recipe by id', () => {
        manager.delete(1);
        const recipe = manager.getRecipe(1);
        expect(typeof recipe).toBe('undefined');
    });


})