import { compare, hash } from "bcryptjs";
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

        const passwordMatch = await compare(senha, user.senha);

        if (!passwordMatch) {
            throw new Error("Senha errada");
        }

        const passwordHash = await hash(novaSenha, 8);

        user.senha = passwordHash;

        await userRepositories.update(id, user);

        return user;
    }
}

export { UpdatePasswordService };