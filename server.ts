import * as express from "express"
import * as mongoose from "mongoose"
import * as bodyParser from "body-parser"
import * as cookieParser from "cookie-parser"
import * as logger  from "morgan"
import * as cors from "cors"
import * as helmet from "helmet"

import router from "./router/v1"
import config from "./config/main"
import { Logger } from "mongodb";

// Init Express
const app = express()

// Init Mongoose
mongoose.connect(config.db,{useNewUrlParser:true})

// Express middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(logger('dev'))
app.use(helmet())
app.use(cors())

// router
router(app)

// Init Server
let server

if (process.env.NODE_ENV !== config.test_env){
    server = app.listen(config.port, () => {
        console.log(`Server listening on port ${config.port}`)
    })
} else {
    server = app.listen(config.test_port, () => {
        console.log(`Server listening on port ${config.test_port}`)
    })
}

export default server