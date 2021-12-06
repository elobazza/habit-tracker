import { createConnection } from "typeorm";

console.log(process.env);

createConnection({
    type: "postgres",
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    username: String(process.env.DB_USERNAME),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DB_NAME),
    migrations: [
        "src/database/migrations/*.ts"
    ],
    entities: [
        "src/entities/*.ts"
    ],
    cli: {
        migrationsDir: "src/database/migrations",
        entitiesDir: "src/entities"
    }
});