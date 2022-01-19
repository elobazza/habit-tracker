import { EntityRepository, Repository } from "typeorm";
import { Habit } from "../entities/Habit";

@EntityRepository(Habit)
class HabitRepositories extends Repository<Habit> { }

export { HabitRepositories };