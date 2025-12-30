import z, { email } from "zod";
import { CreateUser } from "../use-cases/create-user.js";
import type { Request, Response } from "express";
import { ContentAlreadyExists } from "../use-cases/errors/content-already-exists.js";

const CreateUserBodySchema = z.object({
    name: z.string().nonempty().nonoptional(),
    age: z.coerce.number().nonoptional(),
    email: z.email().nonempty().nonoptional(),
})

export class UserController {
    constructor(private createUserUseCase: CreateUser){}
    async createUser(req: Request, res: Response){
        const {age,email,name} = CreateUserBodySchema.parse(req.body)
        try {
            const {user} = await this.createUserUseCase.execute({age,email,name})
            return res.status(201).send({
                user
            })
        } catch (error) {
            if(error instanceof ContentAlreadyExists){
                return res.status(409).send(error.message)
            }
            throw error
        }
    }
}