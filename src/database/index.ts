import { createConnection } from "typeorm";

const extra = {};

const localEnv = String(process.env.NODE_ENV) === 'local';

if (localEnv) {
    Object.assign(extra, { ssl: false });
}
else {
    Object.assign(extra, {
        ssl: {
            rejectUnauthorized: false,
        }
    });
}

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
    extra,
});