const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  console.log(req.baseUrl);
  res.status(200).render("skillclassupdate", {
    title: "SKill Class Update",
    route: req.baseUrl,
  });
});

module.exports = router;
