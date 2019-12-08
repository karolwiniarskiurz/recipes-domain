import { Recipe } from '../src/recipe';

describe('Recipe', () => {
    // TODO: remove it just examplar test
    it('should set proper name to recipe', () => {
        const recipeName = 'placek';
        const recipe = new Recipe(recipeName);
        expect(recipe.name).toEqual(recipeName);
    })

    // TODO: remove it just examplar test
    it('should throw an exception', () => {
        const errorFn = () => { throw new Error() }

        expect(errorFn).toThrowError()
    })

})