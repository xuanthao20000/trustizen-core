const express = require("express");
const morgan = require("morgan");
const route = require("./routers/Index.js");
const client = require("./config/connection.js");
// const client = require("./server/config/connection.js");
const app = express();
const port = 3000;

app.use(morgan("combined"));

route(app);

app.get("/products", (req, res) => {
  client.query(`Select * from product`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else res.status(500).json(err);
  });
});

client.connect();

app.listen(port, () => console.log("Listening on port http://localhost:3000"));
