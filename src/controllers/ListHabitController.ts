import { Request, Response } from "express";
import { ListHabitService } from "../services/ListHabitService";

class ListHabitController {
    async handle(request: Request, response: Response) {

        const { idusuario } = request.params;

        const listHabitsService = new ListHabitService();

        const habits = await listHabitsService.execute(
            idusuario
        );

        return response.json(habits);
    }
}

export { ListHabitController };