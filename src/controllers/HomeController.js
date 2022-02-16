class HomeController {
  home(req, res) {
    res.send("Home");
  }
}

module.exports = new HomeController();
