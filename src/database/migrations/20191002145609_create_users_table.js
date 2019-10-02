export const up = (knex) => {
   return knex.schema.createTable("users", (table) => {
        table.increments()
        table.string("username").unique().notNullable()
        table.string("email").unique().notNullable()
        table.string("password")

        table.timestamps()
    })
}

export const down = (knex) => {
    return knex.schema.dropTable("users")
}