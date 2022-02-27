const express = require("express");
const Employee = require("../models/employeeModel");
const { ObjectId } = require("mongoose").Types;
const router = express.Router();
const allowedSkillLevels = require("../data/skillLevels");

router
  .route("/")
  .get((req, res) => {
    const employeeSuccessful = req.query.employee_successful;
    if (employeeSuccessful && employeeSuccessful == "true") {
      employeeSuccessful = true;
    }
    // console.log("allowedSkillLevels", allowedSkillLevels);

    Employee.find({})
      .then((employees) => {
        // console.log("employees", employees);
        res.render("employees", {
          employees,
          route: req.baseUrl,
          employeeSuccessful,
        });
      })
      .catch((error) => {
        res.render("error", { error });
      });
  })
  .post((req, res) => {
    const employee = req.body;
    Employee.create(employee)
      .then(() => {
        res.redirect("/employees?employee_successful=true");
      })
      .catch((error) => res.render("error", { error }));
  });

router.route("/:id").get((req, res) => {
  // console.log(req.params.id);

  Employee.findById(ObjectId(req.params.id))
    .then((employee) => {
      res
        .status(200)
        .render("employee", {
          employee,
          route: req.baseUrl,
          allowedSkillLevels,
        });
    })
    .catch((error) => res.render("error", { error }));
});

router.route("/delete/:id").post((req, res) => {
  Employee.deleteOne({ _id: ObjectId(req.params.id) })
    .then(() => {
      console.log("successfully deleted");

      res.redirect(303, "/employees");
    })
    .catch((error) => {
      console.log(error.message);
      res.redirect("error", { error });
    });
});

module.exports = router;
