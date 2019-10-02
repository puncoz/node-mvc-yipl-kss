import express from "express"
import bodyParser from "body-parser"
import methodOverride from "method-override"
import routers from "./../routes"
import Knex from "knex"
import DBConfig from "./../config/database.config"
import { Model } from "objection"

class App {
    constructor() {
        this.app = express()

        this.setup()
        this.database()
        this.routes()
    }

    setup() {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))

        this.app.use(methodOverride("_method"))
    }

    database() {
        const knex = Knex(DBConfig)
        Model.knex(knex)
    }

    routes() {
        this.app.use("/", routers)
    }
}

export default App