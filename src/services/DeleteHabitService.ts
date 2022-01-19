import { getCustomRepository } from "typeorm";
import { HabitRepositories } from "../repositories/HabitRepositories";

class DeleteHabitService {
    async execute(idhabito: string) {
        const habitRepositories = getCustomRepository(HabitRepositories);

        const habit = await habitRepositories.findOne({
            idhabito
        });

        if (!habit) {
            throw new Error('Hábito não existe!');
        }

        await habitRepositories.delete({ idhabito });
    }
}

export { DeleteHabitService };