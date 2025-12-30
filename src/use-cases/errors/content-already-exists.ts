export class ContentAlreadyExists extends Error {
    constructor(){
        super('Content already exists')
    }
}