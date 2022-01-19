import { Request, Response } from "express";
import { CreateHabitService } from "../services/CreateHabitService";

class CreateHabitController {
    async handle(request: Request, response: Response) {
        const { nome, descricao, icone, cor, usuario } = request.body;

        const createHabitService = new CreateHabitService();

        const ativo = true;

        const habit = await createHabitService.execute({
            nome, descricao, ativo, icone, cor, usuario
        });

        return response.json(habit);
    }
}

export { CreateHabitController };