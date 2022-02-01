import { EntityRepository, Repository } from "typeorm";
import { Alert } from "../entities/Alert";

@EntityRepository(Alert)
class AlertRepositories extends Repository<Alert> { }

export { AlertRepositories };