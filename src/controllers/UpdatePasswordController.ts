import { Request, Response } from "express";
import { UpdatePasswordService } from "../services/UpdatePasswordService";

class UpdatePasswordController {
    async handle(request: Request, response: Response) {
        const { idusuario } = request.params;
        const { senha, novaSenha, confirmaSenha } = request.body;

        if (novaSenha != confirmaSenha) {
            throw new Error("As senhas não são iguais");
        }

        const updatePasswordService = new UpdatePasswordService();

        const user = await updatePasswordService.execute({ idusuario, senha, novaSenha });

        return response.json(user);
    }
}

export { UpdatePasswordController };