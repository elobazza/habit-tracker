import { getCustomRepository } from "typeorm";
import { HabitRepositories } from "../repositories/HabitRepositories";

class ListHabitService {
    async execute(usuario: string) {
        const habitRepositories = getCustomRepository(HabitRepositories);

        const habits = await habitRepositories.find({
            where: {
                usuario: usuario,
                ativo: true,
            },
            relations: ["usuario"],
        });

        return habits;
    }
}

export { ListHabitService };