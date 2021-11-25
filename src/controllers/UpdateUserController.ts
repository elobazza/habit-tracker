import { json, Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { nome, login, email, dataNascimento, foto } = request.body;

        const updateUserService = new UpdateUserService();

        const user = await updateUserService.execute({ id, nome, login, email, dataNascimento, foto });

        return response.json(user);
    }
}

export { UpdateUserController };