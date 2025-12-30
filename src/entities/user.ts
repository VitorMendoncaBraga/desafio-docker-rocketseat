import { randomUUID } from "node:crypto"
import type { Optional } from "../types/optional.js"

interface IUser {
    id: string,
    name: string,
    age: number,
    email: string
}
export class User {
    private id: string
    private age: number
    private email: string
    private name: string
    private constructor({ age, email, id, name }: IUser) {
        this.age = age
        this.email = email
        this.id = id
        this.name = name
    }

    get Age(){
        return this.age
    }

    get Email(){
        return this.email
    }

    get Name(){
        return this.name
    }

    get Id(){
        return this.id
    }


    static create(props: Optional<IUser, 'id'>) {
        const user = new User({ age: props.age, email: props.email, id: props.id || randomUUID(), name: props.name })
        return user
    }


}