import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { login, senha } = request.body;

        const authenticateService = new AuthenticateUserService();

        const token = await authenticateService.execute({
            login,
            senha,
        });

        return response.json(token);
    }
}

export { AuthenticateUserController };