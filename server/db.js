import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'el_pensamiento_critico_es_un_privilegio_de_los_que_piensan',
    database: 'database'
})

export default pool