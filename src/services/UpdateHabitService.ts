import { getCustomRepository } from "typeorm";
import { HabitRepositories } from "../repositories/HabitRepositories";

interface IHabitRequest {
    idhabito: string;
    nome: string;
    descricao: string;
    ativo: boolean;
    horario: string;
}

class UpdateHabitService {
    async execute({ idhabito, nome, descricao, ativo, horario }: IHabitRequest) {
        const habitRepositories = getCustomRepository(HabitRepositories);

        let habit = await habitRepositories.findOne({
            idhabito
        });

        habit.nome = nome;
        habit.descricao = descricao;
        habit.ativo = ativo;
        habit.horario = horario;

        await habitRepositories.update(idhabito, habit);

        return habit;
    }
}

export { UpdateHabitService };