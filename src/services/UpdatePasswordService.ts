import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
    id: string;
    senha: string;
    novaSenha: string;
}

class UpdatePasswordService {
    async execute({ id, senha, novaSenha }: IUserRequest) {
        const userRepositories = getCustomRepository(UserRepositories);

        let user = await userRepositories.findOne({
            id
        });

        if (user.senha == senha) {
            const passwordHash = await hash(novaSenha, 8);

            user.senha = passwordHash;
        } else {
            throw new Error("Senha errada");
        }

        await userRepositories.update(id, user);

        return user;
    }
}

export { UpdatePasswordService };