import 'dotenv/config'
import z from 'zod'

const envSchema = z.object({
    PORT: z.coerce.number().nonoptional(),
    DATABASE_URL: z.string().nonempty().nonoptional()
})

const _env = envSchema.safeParse(process.env)

console.log(_env)

if(!_env.success){
    throw new Error("Enviroment variables are essencial")
}

export const env = _env.data