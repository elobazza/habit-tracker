import { getCustomRepository } from "typeorm";
import { HabitRepositories } from "../repositories/HabitRepositories";

class ListAllHabitsByUserService {
    async execute(usuario: string) {
        const habitRepositories = getCustomRepository(HabitRepositories);

        const habits = await habitRepositories.find({
            where: {
                usuario: usuario,
            },
            relations: ["usuario"],
        });

        return habits;
    }
}

export { ListAllHabitsByUserService };