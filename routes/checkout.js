const express = require("express");
const router = express.Router();
const Employee = require("../models/employeeModel");
const Tool = require("../models/toolModel");
const { ObjectId } = require("mongoose").Types;

router
  .route("/")
  .get(async (req, res) => {
    console.log(req.baseUrl);
    const success = req.query.success == "true";
    const successEmployee = req.query.employee;
    const successTool = req.query.tool;
    const availableEmployees = await Employee.find();
    const availableTools = await Tool.find();
    res.status(200).render("checkout", {
      title: "Checkout Equipment",
      route: req.baseUrl,
      availableEmployees,
      availableTools,
      success,
      successEmployee,
      successTool,
    });
  })
  .post(async (req, res) => {
    const employee = await Employee.findById(ObjectId(req.body.employeeid));
    const tool = await Tool.findById(ObjectId(req.body.toolid));
    await Tool.setAsCheckedOutBy(tool._id, employee.name);
    console.log(req.body);
    res.redirect(
      `/checkout?success=true&employee=${employee.name}&tool=${tool.name}`
    );
  });

module.exports = router;
