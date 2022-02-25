var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
let checkinRouter = require("./routes/checkin");
let checkoutRouter = require("./routes/checkout");
let checkoutReportRouter = require("./routes/checkoutreport");
let employeesRouter = require("./routes/employees");
let locateRouter = require("./routes/locate");
let toolsRouter = require("./routes/tools");
const DataIO = require("./models/DataIO");

const database = new DataIO();
database.connect();

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/checkin", checkinRouter);
app.use("/checkout", checkoutRouter);
app.use("/checkoutreport", checkoutReportRouter);
app.use("/employees", employeesRouter);
app.use("/locate", locateRouter);
app.use("/tools", toolsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
