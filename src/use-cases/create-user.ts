import { User } from "../entities/user.js";
import type { UserRepository } from "../repository/user.js";
import { ContentAlreadyExists } from "./errors/content-already-exists.js";

interface CreateUserRequest {
    name: string,
    age: number,
    email: string
}

interface CreateUserReponse {
    user: User
}

export class CreateUser {
    constructor(private userRepository: UserRepository){}

    async execute({age,email,name}: CreateUserRequest): Promise<CreateUserReponse>{
        const userAlreadyExists = await this.userRepository.findByEmail(email)
        if(userAlreadyExists){
            throw new ContentAlreadyExists()
        }

        const user = User.create({
            age,
            email,
            name
        })

        await this.userRepository.create(user)

        return {
            user
        }
    }
}