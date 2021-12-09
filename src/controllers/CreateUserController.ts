import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { nome, senha, email, dataNascimento, foto } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ nome, senha, email, dataNascimento, foto });

        return response.json(user);
    }
}

export { CreateUserController };