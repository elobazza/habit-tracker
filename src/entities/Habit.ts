import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("habito")
class Habit {

    @PrimaryGeneratedColumn('increment')
    readonly idhabito: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    ativo: boolean;

    @Column()
    icone: string;

    @Column()
    cor: string;

    @JoinColumn({ name: "usuario" })
    @ManyToOne(() => User)
    @Column()
    usuario: string;
}

export { Habit }