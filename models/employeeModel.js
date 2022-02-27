const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: Date },
  job: { type: String, required: true },
  skills: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
