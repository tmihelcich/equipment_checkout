var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("req.baseUrl", req.baseUrl);

  res.render("index", {
    title: "Equipment Checkout System",
    route: req.baseUrl,
  });
});

module.exports = router;
