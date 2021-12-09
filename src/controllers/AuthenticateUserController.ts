import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, senha } = request.body;

        const authenticateService = new AuthenticateUserService();

        const token = await authenticateService.execute({
            email,
            senha,
        });

        return response.json(token);
    }
}

export { AuthenticateUserController };