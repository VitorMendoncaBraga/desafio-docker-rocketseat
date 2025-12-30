import { eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { schema } from "../../db/schema/schema.js";
import { User } from "../../entities/user.js";
import type { UserRepository } from "../user.js";

export class DrizzleUserRepository implements UserRepository {
    async create(user: User): Promise<void> {
       await db.insert(schema.usersTable).values({
            id: user.Id,
            age: user.Age,
            email: user.Email,
            name: user.Name
        })
    }

    async findByEmail(email: string): Promise<User | null> {
        const users = await db.select().from(schema.usersTable).where(eq(schema.usersTable.email, email)).limit(1)
        const user = users[0]
        if(!user){
            return null
        }

        const foundedUser = User.create({
            age: user.age,
            email: user.email,
            name: user.name,
            id: user.id
        })

        return foundedUser
    }
}