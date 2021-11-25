import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { nome, login, senha, dataNascimento, foto } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ nome, login, senha, dataNascimento, foto });

        return response.json(user);
    }
}

export { CreateUserController };