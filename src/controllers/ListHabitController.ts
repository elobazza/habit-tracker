import { Request, Response } from "express";
import { ListActiveHabitsByUserService } from "../services/ListActiveHabitsByUserService";

class ListActiveHabitsByUserController {
    async handle(request: Request, response: Response) {

        const { idusuario } = request.params;

        const listHabitsService = new ListActiveHabitsByUserService();

        const habits = await listHabitsService.execute(
            idusuario
        );

        return response.json(habits);
    }
}

export { ListActiveHabitsByUserController };