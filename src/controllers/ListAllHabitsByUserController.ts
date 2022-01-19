import { Request, Response } from "express";
import { ListAllHabitsByUserService } from "../services/ListAllHabitsByUserService";

class ListAllHabitsByUserController {
    async handle(request: Request, response: Response) {

        const { idusuario } = request.params;

        const listHabitsService = new ListAllHabitsByUserService();

        const habits = await listHabitsService.execute(
            idusuario
        );

        return response.json(habits);
    }
}

export { ListAllHabitsByUserController };