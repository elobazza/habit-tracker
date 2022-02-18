import { FindConditions, ObjectID, Repository, UpdateResult } from "typeorm";
import { User } from "../entities/User";
import { UserRepositories } from "./UserRepositories";


class TestUserRepositories extends Repository<User> {

    private users: User[];

    //constructor() {
    //   this.users = [];
    //}


    //public async create(nome, senha, data_nascimento, email, foto) {
    //    const user = new User();

    //     Object.assign(user, { nome, senha, data_nascimento, email, foto });
    //     this.users.push(user);
    //    return user;
    //}

    //public async update(idusuario, nome, senha, data_nascimento, email, foto) {
    //    const user = this.users.find((actualUser) => actualUser.idusuario == idusuario);
    //    Object.assign(user, { idusuario, nome, senha, data_nascimento, email, foto });

    //   return user;
    //}



}

export { TestUserRepositories };