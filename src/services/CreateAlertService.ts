import { getCustomRepository, Timestamp } from "typeorm";
import { AlertRepositories } from "../repositories/AlertRepositories";

interface IAlertRequest {
    descricao: string;
    horario: string;
    habito: string;
}

class CreateAlertService {
    async execute({ descricao, horario, habito }: IAlertRequest) {
        const alertRepository = getCustomRepository(AlertRepositories);

        const alert = alertRepository.create({
            descricao,
            horario,
            habito
        });

        await alertRepository.save(alert);

        return alert;
    }
}

export { CreateAlertService };