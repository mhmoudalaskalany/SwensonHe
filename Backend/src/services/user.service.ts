import { DocumentDefinition, FilterQuery } from "mongoose";
import { User, IUser } from "../models/user.model";
import { omit } from "lodash";
import log from "../logger";
export class UserService {
    /**
     * Create User
     * @param input 
     * @returns 
     */
    async createUser(input: DocumentDefinition<IUser>) {
        try {
            log.info(input);
            return await User.create(input)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Find User
     * @param query 
     * @returns 
     */
    async findUser(query: FilterQuery<IUser>) {
        return User.findOne(query).lean();
    }
    /**
     * Validate Password
     * @param User 
     * @returns 
     */
    async validatePassword({
        username,
        password,
    }: {
        username: IUser['username'];
        password: string;
    }) {

        const user = await User.findOne({ username });
        if (!user) {
            return false;
        }
        // await User.comparePassword(password);
        const isValid = true;
        if (!isValid) {
            return false;
        }
        return omit(user.toJSON(), 'password');

    }
}