import express from 'express'
import type { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
import { userRoutes } from './routes/user.route.js'

export const app = express()
app.use(express.json())
app.use('/users', userRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof ZodError){
        return res.status(400).send({
            message: 'Validation error',
            error: err.format()
        })
    }

    console.log(err)
    return res.status(500).send({
        message: 'Internal server error'
    })
})