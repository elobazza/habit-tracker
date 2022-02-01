import { Request, Response } from "express";
import { Timestamp } from "typeorm";
import { CreateAlertService } from "../services/CreateAlertService";

class CreateAlertController {
    async handle(request: Request, response: Response) {
        const { descricao, horario } = request.body;
        const { habito } = request.params;

        const createAlertService = new CreateAlertService();

        const alert = await createAlertService.execute({
            descricao,
            horario,
            habito
        });

        return response.json(alert);
    }
}

export { CreateAlertController };