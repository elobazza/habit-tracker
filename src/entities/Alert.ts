import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Habit } from "./Habit";

@Entity("alerta")
class Alert {

    @PrimaryGeneratedColumn('increment')
    readonly idalerta: string;

    @Column()
    descricao: string;

    @Column()
    horario: string;

    @JoinColumn({ name: "habito" })
    @ManyToOne(() => Habit)
    @Column()
    habito: string;
}

export { Alert }