require("dotenv").config();
const mysql = require("mysql2");

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const dbPort = process.env.DB_PORT;


const pool = mysql.createPool({
    connectionLimit: 20,
    host,
    user,
    // password,
    database,
    namedParameters: true,
    multipleStatements: true,
    timezone: "Z"
});

pool.getConnection((err, connection) => {
    console.log(
        host,
        user,
        password,
        database
    )
    // console.log(pool)
    // console.log(err)
    // console.log(connection)
    // console.log("HHHEEEEEEEEEEYYYy")
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }

    if (connection) {
        console.log(`Database pool created on port ${dbPort}`);
        connection.release();
    }

    return;
});

module.exports = pool;