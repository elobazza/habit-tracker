import { createConnection } from "typeorm";

createConnection({
    name: "default",
    type: "postgres",
    host: String(process.env.TYPEORM_HOST),
    port: Number(process.env.TYPEORM_PORT),
    username: String(process.env.TYPEORM_USERNAME),
    password: String(process.env.TYPEORM_PASSWORD),
    database: String(process.env.TYPEORM_DATABASE),
    entities: [
        String(process.env.TYPEORM_ENTITIES),
    ],
    migrations: [
        String(process.env.TYPEORM_MIGRATIONS),
    ],
    migrationsRun: true,
});