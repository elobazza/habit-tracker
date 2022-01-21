import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { idusuario } = request.params;
        const { nome, email, dataNascimento, foto } = request.body;

        const updateUserService = new UpdateUserService();

        const user = await updateUserService.execute({ idusuario, nome, email, dataNascimento, foto });

        return response.json(user);
    }
}

export { UpdateUserController };