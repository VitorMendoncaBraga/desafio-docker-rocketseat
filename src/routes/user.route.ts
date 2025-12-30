import type { Request, Response } from "express";
import { Router } from 'express'
import { UserController } from "../controllers/user.controller.js";
import { CreateUser } from "../use-cases/create-user.js";
import { DrizzleUserRepository } from "../repository/drizzle/user.js";
const userRepository = new DrizzleUserRepository()
const createUserUseCase = new CreateUser(userRepository)
const userController = new UserController(createUserUseCase)

export function userRoutes() {
    const router = Router()

    router.post('/', (req: Request, res: Response) => userController.createUser(req, res))

    return router
}