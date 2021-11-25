import { Column, Entity, PrimaryColumn } from "typeorm";

import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";


@Entity("usuario")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @Column()
    login: string;

    @Exclude()
    @Column()
    senha: string;

    @Column()
    dataNascimento: Date;

    @Column()
    email: string;

    @Column()
    foto: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User }