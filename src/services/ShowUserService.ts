import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

class ShowUserService {
    async execute(id: string) {
        const userRepositories = getCustomRepository(UserRepositories);

        const user = await userRepositories.find({
            id
        });

        return user;
    }
}

export { ShowUserService };