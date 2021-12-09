import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
    idusuario: string;
    nome: string;
    email: string;
    dataNascimento: Date;
    foto: string;
}


class UpdateUserService {
    async execute({ idusuario, nome, email, dataNascimento, foto }: IUserRequest) {
        const userRepositories = getCustomRepository(UserRepositories);

        let user = await userRepositories.findOne({
            idusuario
        });

        user.nome = nome;
        user.email = email;
        user.dataNascimento = dataNascimento;
        user.foto = foto;

        await userRepositories.update(idusuario, user);

        return user;
    }
}

export { UpdateUserService };