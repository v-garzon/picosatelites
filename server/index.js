import express from "express";

import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { PORT } from "./config.js";
import PingRoute from "./routes/ping.route.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(PingRoute);

app.use(express.json());

// BUILDING CONFIG
app.use(express.static(join(__dirname, "../client/dist")));

app.listen(PORT);
console.log(`Server is running on port: ${PORT}`);
