export default {
    client: "postgresql",
    connection: {
        host: 'localhost',
        port: '5432',
        database: 'nodejs-mvc',
        user: 'postgres',
        password: 'p',
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: "migrations",
        directory: "./src/database/migrations",
    },
}