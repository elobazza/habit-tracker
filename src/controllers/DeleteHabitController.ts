import { Request, Response } from "express";
import { DeleteHabitService } from "../services/DeleteHabitService";

class DeleteHabitController {
    async handle(request: Request, response: Response) {
        const deleteHabitService = new DeleteHabitService();

        const { idhabito } = request.params;

        const habit = await deleteHabitService.execute(idhabito);

        return response.json("Removido com sucesso!");
    }
}

export { DeleteHabitController };