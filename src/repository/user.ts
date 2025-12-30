import { User } from "../entities/user.js";

export interface UserRepository {
    create(user: User): Promise<void>
    findByEmail(email: string): Promise<User | null>
}