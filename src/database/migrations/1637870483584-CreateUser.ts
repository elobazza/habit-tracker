import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1637870483584 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuario",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: "name",
                        type: "varchar(100)",
                        isNullable: false,
                    },
                    {
                        name: "login",
                        type: "varchar(100)",
                        isNullable: false,
                    },
                    {
                        name: "senha",
                        type: "varchar(100)",
                        isNullable: false,
                    },
                    {
                        name: "data_nascimento",
                        type: "date",
                        isNullable: false,
                    },
                    {
                        name: "foto",
                        type: "varchar(250)",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuario");
    }

}
