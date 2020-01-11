export class EntityNotFoundException extends Error {

    constructor() {
        super('Encja nie znaleziona')
    }
}