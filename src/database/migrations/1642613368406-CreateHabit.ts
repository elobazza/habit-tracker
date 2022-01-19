import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHabit1642613368406 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "habito",
                columns: [
                    {
                        name: "idhabito",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "usuario",
                        type: "integer",
                    },
                    {
                        name: "nome",
                        type: "varchar(100)",
                        isNullable: false,
                    },
                    {
                        name: "descricao",
                        type: "varchar(250)",
                        isNullable: true,
                    },
                    {
                        name: "ativo",
                        type: "boolean",
                        isNullable: false,
                    },
                    {
                        name: "icone",
                        type: "varchar(250)",
                    },
                    {
                        name: "cor",
                        type: "varchar(250)",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUserHabit",
                        referencedTableName: "usuario",
                        referencedColumnNames: ["idusuario"],
                        columnNames: ["usuario"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },

                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("habito");
    }

}
