import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

class ShowUserService {
    async execute(idusuario: string) {
        const userRepositories = getCustomRepository(UserRepositories);

        const user = await userRepositories.find({
            idusuario
        });

        return user;
    }
}

export { ShowUserService };