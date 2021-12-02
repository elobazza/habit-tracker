import { Request, Response } from "express";
import { ShowUserService } from "../services/ShowUserService";

class ShowUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const showUserService = new ShowUserService();

        const user = await showUserService.execute(id);

        return response.json(user);
    }
}

export { ShowUserController };