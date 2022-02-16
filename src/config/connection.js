const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "MyDatabase",
  password: "bengoxnget1",
});

module.exports = client;
