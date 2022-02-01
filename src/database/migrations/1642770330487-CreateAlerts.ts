import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAlerts1642770330487 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "alerta",
                columns: [
                    {
                        name: "idalerta",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "horario",
                        type: "varchar(5)",
                        isNullable: false,
                    },
                    {
                        name: "descricao",
                        type: "varchar(250)",
                        isNullable: true,
                    },
                    {
                        name: "habito",
                        type: "integer",
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKHabit",
                        referencedTableName: "habito",
                        referencedColumnNames: ["idhabito"],
                        columnNames: ["habito"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },

                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("alerta");
    }

}
