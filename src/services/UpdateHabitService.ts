import { getCustomRepository } from "typeorm";
import { HabitRepositories } from "../repositories/HabitRepositories";

interface IHabitRequest {
    idhabito: string;
    nome: string;
    descricao: string;
    ativo: boolean;
    icone: string;
    cor: string;
}

class UpdateHabitService {
    async execute({ idhabito, nome, descricao, ativo, icone, cor }: IHabitRequest) {
        const habitRepositories = getCustomRepository(HabitRepositories);

        let habit = await habitRepositories.findOne({
            idhabito
        });

        habit.nome = nome;
        habit.descricao = descricao;
        habit.ativo = ativo;
        habit.icone = icone;
        habit.cor = cor;

        await habitRepositories.update(idhabito, habit);

        return habit;
    }
}

export { UpdateHabitService };