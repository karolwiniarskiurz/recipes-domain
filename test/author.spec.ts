import { Author } from '../src/models/author';

describe('Author', () => {
    // TODO: remove it just examplar test
    it('should set propers to author object', () => {

        // const options = {}
        const author = new Author(1, 'Jan', 'Kowalski','123456', 'jan@kowalski.pl', ['frytki']);

        expect(author.id).toEqual(1);
        expect(author.name).toEqual('Jan');
        expect(author.lastName).toEqual('Kowalski');
        expect(author.password).toEqual('123456');
        expect(author.email).toEqual('jan@kowalski.pl');
        expect(author.favorites).toContain('frytki');
    })

    // TODO: remove it just examplar test
    it('should throw an exception', () => {
        const errorFn = () => { throw new Error() }

        expect(errorFn).toThrowError()
    })

})