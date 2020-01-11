import { Author } from '../src/models/author';

describe('Author', () => {
    let author: Author;
    beforeEach(() => {
        author = new Author(1, 'Jan', 'Kowalski', '123456', 'jan@kowalski.pl', ['frytki']);
    })

    it('should create', () => {
        expect(author).toBeTruthy();
    })

    it('should set propers to author object', () => {
        expect(author.id).toEqual(1);
        expect(author.name).toEqual('Jan');
        expect(author.lastName).toEqual('Kowalski');
        expect(author.password).toEqual('123456');
        expect(author.email).toEqual('jan@kowalski.pl');
        expect(author.favorites).toContain('frytki');
    })
})