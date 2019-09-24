const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

const { mongoose } = require("./database");

//Settings
app.set("port", process.env.PORT || 3001);

//Middlewares
//Functions executed before getting the routes
app.use(morgan("dev"));
//Handles .json data send/receive
app.use(express.json());

//Routes
app.use("/api/tasks", require("./routes/task.routes"));

//Static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
