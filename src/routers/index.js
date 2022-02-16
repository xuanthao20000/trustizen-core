const homeRouter = require("./HomeRouter.js");

function route(app) {
  app.use("/", homeRouter);
}

module.exports = route;
