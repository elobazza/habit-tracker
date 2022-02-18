import { Request, Response } from "express";
import { UpdateHabitService } from "../services/UpdateHabitService";

class UpdateHabitController {
    async handle(request: Request, response: Response) {
        const { idhabito } = request.params;
        const { nome, descricao, ativo, horario } = request.body;

        const updateHabitService = new UpdateHabitService();

        const habit = await updateHabitService.execute({ idhabito, nome, descricao, ativo, horario });

        return response.json(habit);
    }
}

export { UpdateHabitController };