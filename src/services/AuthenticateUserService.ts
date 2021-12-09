import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import { UserRepositories } from "../repositories/UserRepositories";

interface IAuthenticateRequest {
    email: string;
    senha: string;
}

class AuthenticateUserService {
    async execute({ email, senha }: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UserRepositories);

        const user = await userRepositories.findOne({
            email,
        });

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = await compare(senha, user.senha);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        // Gerar token
        const token = sign(
            {
                email: user.email,
            },
            "4f93ac9d10cb751b8c9c646bc9dbccb9",
            {
                subject: user.idusuario.toString(),
                expiresIn: "1d",
            }
        );

        return token;
    }
}

export { AuthenticateUserService };