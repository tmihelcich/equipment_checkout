const express = require("express");
const router = express.Router();
const Tool = require("../models/toolModel");
const { ObjectId } = require("mongoose").Types;

router
  .route("/")
  .get(async (req, res) => {
    let checkinSuccessful = req.query.checkin_successful;
    if (checkinSuccessful && checkinSuccessful == "true") {
      checkinSuccessful = true;
    }

    const checkedOutTools = await Tool.find({
      availability: "Not Available",
    });

    res.status(200).render("checkin", {
      title: "Check In Equipment",
      route: req.baseUrl,
      checkinSuccessful,
      checkedOutTools,
    });
  })
  .post(async (req, res) => {
    try {
      const { toolid } = req.body;

      await Tool.setAsCheckedIn(ObjectId(toolid));
      res.redirect("/checkin?checkin_successful=true");
    } catch (error) {
      res.redirect("/checkin?checkin_successful=false");
    }
  });

module.exports = router;
