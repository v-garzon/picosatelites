import express from "express";
import cors from "cors"
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { PORT } from "./config.js";
import PingRoute from "./routes/ping.route.js";
import UserRoute from './routes/user.routes.js'
import TextRoute from './routes/text.routes.js'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))



app.use(cors({
    origin:'https://vgarzoon.com'
}))

app.use(express.json());

app.use(PingRoute);
app.use(UserRoute)
app.use(TextRoute)



// BUILDING CONFIG
app.use(express.static(join(__dirname, "../client/dist")));

app.listen(PORT);
console.log(`Server is running on port: ${PORT}`);
