const express = require("express");
const Tool = require("../models/toolModel");
const skillLevels = require("../data/skillLevels");
const { ObjectId } = require("mongoose").Types;
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    Tool.find({})
      .then((tools) => {
        // console.log("tools", tools);
        res.render("tools", {
          tools,
          route: req.baseUrl,
          skillLevels,
        });
      })
      .catch((error) => {
        res.render("error", { error });
      });
  })
  .post((req, res) => {
    const tool = req.body;
    Tool.create(tool)
      .then(() => {
        res.redirect("/tools");
      })
      .catch((error) => res.render("error", { error }));
  });

router.route("/:id").get((req, res) => {
  // console.log(req.params.id);
  Tool.findById(ObjectId(req.params.id))
    .then((tool) => {
      // console.log("tool", tool);
      res.status(200).render("tool", { tool, route: req.baseUrl });
    })
    .catch((error) => res.render("error", { error }));
});

router.route("/delete/:id").post((req, res) => {
  Tool.deleteOne({ _id: ObjectId(req.params.id) })
    .then(() => {
      console.log("successfully deleted");

      res.redirect(303, "/tools");
    })
    .catch((error) => {
      console.log(error.message);
      res.redirect("error", { error });
    });
});

module.exports = router;
