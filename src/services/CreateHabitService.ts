import { getCustomRepository } from "typeorm";
import { HabitRepositories } from "../repositories/HabitRepositories";

interface IHabitRequest {
    nome: string;
    descricao: string;
    ativo: boolean;
    horario: string;
    usuario: string;
}

class CreateHabitService {
    async execute({ nome, descricao, ativo, horario, usuario }: IHabitRequest) {
        const habitsRepository = getCustomRepository(HabitRepositories);


        const habitAlreadyExists = await habitsRepository.findOne({
            nome, usuario
        });

        if (habitAlreadyExists) {
            throw new Error("Já existe um Hábito com este nome!");
        }


        const habit = habitsRepository.create({
            nome,
            descricao,
            ativo,
            horario,
            usuario
        });

        await habitsRepository.save(habit);

        return habit;
    }
}

export { CreateHabitService };