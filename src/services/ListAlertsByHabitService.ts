import { getCustomRepository } from "typeorm";
import { AlertRepositories } from "../repositories/AlertRepositories";

class ListAlertsByHabitService {
    async execute(habito: string) {
        const alertRepositories = getCustomRepository(AlertRepositories);

        const alerts = await alertRepositories.find({
            where: {
                habito,
            },
            relations: ["habito"],
        });

        return alerts;
    }
}

export { ListAlertsByHabitService };