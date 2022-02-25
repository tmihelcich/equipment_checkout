const mongoose = require("mongoose");

const toolSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  availability: { type: String, default: "Available" },
  checkedOutBy: { type: String, default: "" },
  skill: {
    type: String,
    required: true,
  },
});

// toolSchema.statics.setAsCheckedIn = function (id, cb) {
//   console.log("set as checked in");
//   return id;
// };
toolSchema.static("setAsCheckedIn", function (id) {
  return this.update(
    { _id: id },
    { $set: { availability: "Available", checkedOutBy: "" } }
  );
});

toolSchema.static("setAsCheckedOut", function (id) {
  return this.update({ _id: id }, { $set: { availability: "Not Available" } });
});

toolSchema.static("setAsCheckedOutBy", function (id, employeeName) {
  return this.update(
    { _id: id },
    { $set: { availability: "Not Available", checkedOutBy: employeeName } }
  );
});

const Tool = mongoose.model("Tool", toolSchema);

module.exports = Tool;
