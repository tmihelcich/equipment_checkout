export class DataIO {
  #CONNECTION_STRING;
  #DATABASE_NAME;
  #DATABASE_USERNAME;
  #DATABASE_PASSWORD;

  constructor(connectionString, databaseName, userName, password) {
    this.#CONNECTION_STRING = connectionString;
    this.#DATABASE_NAME = databaseName;
    this.#DATABASE_USERNAME = userName;
    this.#DATABASE_PASSWORD = password;
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
