import { Request, Response } from "express";
import { ShowUserService } from "../services/ShowUserService";

class ShowUserController {
    async handle(request: Request, response: Response) {
        const { idusuario } = request.params;

        const showUserService = new ShowUserService();

        const user = await showUserService.execute(idusuario);

        return response.json(user);
    }
}

export { ShowUserController };