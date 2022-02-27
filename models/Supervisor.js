const Employee = require("../models/employeeModel");
const { ObjectId } = require("mongoose").Types;

class Supervisor {
  constructor() {}

  static async sendSkillClassificationUpdate(empId, skill) {
    Employee.updateOne({ _id: ObjectId(empId) }, { $set: { skill: skill } });
  }
}

module.exports = Supervisor;
