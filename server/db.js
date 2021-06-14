const Pool = require("pg").Pool;
const dotenv = require("dotenv").config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;

console.log(process.env.DB_PASSWORD);

const pool = new Pool({
  user: user,
  password: password,
  host: host,
  port: port,
  database: database
});

module.exports = pool;
