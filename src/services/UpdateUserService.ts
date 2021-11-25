import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
    id: string;
    nome: string;
    login: string;
    senha: string;
    email: string;
    dataNascimento: Date;
    foto: string;
}


class UpdateUserService {
    async execute({ id, nome, login, email, dataNascimento, foto }: IUserRequest) {
        const userRepositories = getCustomRepository(UserRepositories);

        let user = await userRepositories.findOne({
            id
        });

        user.nome = nome;
        user.login = login;
        user.email = email;
        user.dataNascimento = dataNascimento;
        user.foto = foto;

        await userRepositories.update(id, user);
    }
}

export { UpdateUserService };