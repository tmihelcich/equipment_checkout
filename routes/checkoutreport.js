const express = require("express");
const router = express.Router();
const Tool = require("../models/toolModel");

router.route("/").get((req, res) => {
  Tool.find({ checkedOutBy: { $ne: "" } }).then((tools) => {
    res.status(200).render("checkoutreport", {
      title: "Checkout Report",
      route: req.baseUrl,
      checkedOutTools: tools,
    });
  });
});

module.exports = router;
