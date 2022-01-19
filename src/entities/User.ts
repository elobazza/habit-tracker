import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { Exclude } from "class-transformer";


@Entity("usuario")
class User {

    @PrimaryGeneratedColumn('increment')
    readonly idusuario: string;

    @Column()
    nome: string;

    @Exclude()
    @Column()
    senha: string;

    @Column({ name: "data_nascimento" })
    dataNascimento: Date;

    @Column()
    email: string;

    @Column()
    foto: string;

    token: string;
}

export { User }