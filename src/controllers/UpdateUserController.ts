import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { nome, login, senha, email, dataNascimento, foto } = request.body;

        const updateUserService = new UpdateUserService();

        await updateUserService.execute({ id, nome, login, senha, email, dataNascimento, foto });
    }
}

export { UpdateUserController };