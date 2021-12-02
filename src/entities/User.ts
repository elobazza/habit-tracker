import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";


@Entity("usuario")
class User {

    @PrimaryGeneratedColumn('increment')
    readonly id: string;

    @Column()
    nome: string;

    @Column()
    login: string;

    @Exclude()
    @Column()
    senha: string;

    @Column({ name: "data_nascimento" })
    dataNascimento: Date;

    @Column()
    email: string;

    @Column()
    foto: string;
}

export { User }