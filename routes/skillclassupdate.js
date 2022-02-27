const express = require("express");
const router = express.Router();
const Supervisor = require("../models/Supervisor");

router.route("/").get((req, res) => {
  console.log(req.baseUrl);
  console.log("form", req.body);
  res.status(200).render("skillclassupdate", {
    title: "SKill Class Update",
    route: req.baseUrl,
  });
});

router.route("/:id").post(async (req, res) => {
  console.log("form", req.body);
  console.log("id", req.params.id);

  await Supervisor.sendSkillClassificationUpdate(req.params.id, req.body.skill);
  res.redirect(`/employees/${req.params.id}`);
});

module.exports = router;
