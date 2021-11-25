import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { nome, login, senha, email, dataNascimento, foto } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ nome, login, senha, email, dataNascimento, foto });

        return response.json(user);
    }
}

export { CreateUserController };