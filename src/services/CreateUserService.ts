import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    nome: string;
    login: string;
    senha: string;
    dataNascimento: Date;
    foto: string;
}

class CreateUserService {
    async execute({ nome, login, senha, dataNascimento, foto }: IUserRequest) {
        const usersRepository = getCustomRepository(UserRepositories);

        if (!login) {
            throw new Error("Login incorreto");
        }

        const userAlreadyExists = await usersRepository.findOne({
            login,
        });

        if (userAlreadyExists) {
            throw new Error("Usuário já existente");
        }

        const passwordHash = await hash(senha, 8);

        const user = usersRepository.create({
            nome,
            login,
            senha: passwordHash,
            dataNascimento,
            foto
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };