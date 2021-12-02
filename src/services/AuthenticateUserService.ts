import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import { UserRepositories } from "../repositories/UserRepositories";

interface IAuthenticateRequest {
    login: string;
    senha: string;
}

class AuthenticateUserService {
    async execute({ login, senha }: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UserRepositories);

        const user = await userRepositories.findOne({
            login,
        });

        if (!user) {
            throw new Error("Login/Password incorrect");
        }

        const passwordMatch = await compare(senha, user.senha);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        // Gerar token
        const token = sign(
            {
                login: user.login,
            },
            "4f93ac9d10cb751b8c9c646bc9dbccb9",
            {
                subject: user.id.toString(),
                expiresIn: "1d",
            }
        );

        return token;
    }
}

export { AuthenticateUserService };