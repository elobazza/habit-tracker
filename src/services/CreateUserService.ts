import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    nome: string;
    senha: string;
    email: string;
    dataNascimento: Date;
    foto: string;
}

class CreateUserService {
    async execute({ nome, senha, email, dataNascimento, foto }: IUserRequest) {
        const usersRepository = getCustomRepository(UserRepositories);

        if (!email) {
            throw new Error("Email incorreto");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email,
        });

        if (userAlreadyExists) {
            throw new Error("Usuário já existente");
        }

        const passwordHash = await hash(senha, 8);

        const user = usersRepository.create({
            nome,
            senha: passwordHash,
            email,
            dataNascimento,
            foto
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };