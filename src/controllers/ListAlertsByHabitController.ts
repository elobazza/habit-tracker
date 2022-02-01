import { Request, Response } from "express";
import { ListAlertsByHabitService } from "../services/ListAlertsByHabitService";

class ListAlertsByHabitController {
    async handle(request: Request, response: Response) {

        const { idhabito } = request.params;

        const listAlertsByHabitService = new ListAlertsByHabitService();

        const alerts = await listAlertsByHabitService.execute(
            idhabito
        );

        return response.json(alerts);
    }
}

export { ListAlertsByHabitController };