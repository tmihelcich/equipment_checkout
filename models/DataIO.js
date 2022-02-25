const mongoose = require("mongoose");

class DataIO {
  #CONNECTION_STRING =
    "mongodb+srv://<DB_USERNAME>:<DB_PASSWORD>@ticdoc.og6ee.mongodb.net/<DB_NAME>?retryWrites=true&w=majority";
  #DATABASE_NAME = "equipment_checkout";
  #DATABASE_USERNAME = "admin";
  #DATABASE_PASSWORD = "bbv26149";

  constructor() {}

  async connect() {
    try {
      const uri = this.#CONNECTION_STRING
        .replace("<DB_USERNAME>", this.#DATABASE_USERNAME)
        .replace("<DB_PASSWORD>", this.#DATABASE_PASSWORD)
        .replace("<DB_NAME>", this.#DATABASE_NAME);
      const conn = await mongoose.connect(
        "mongodb+srv://admin:bbv26149@ticdoc.og6ee.mongodb.net/equipment_checkout?retryWrites=true&w=majority"
      );

      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit(1);
    }
  }
  getInventoryList() {}
  checkOutTool(tool) {}
  checkInTool(tool) {}
  getEmployeeToolHistory(employee) {}
  getToolHistory(tool) {}
  getCurrentEmployeeCheckouts(employee) {}
  getListMissingTools() {}
  getLocationList() {}
  validateEmployee(employeeId) {}
}

module.exports = DataIO;
