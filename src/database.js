const mongoose = require("mongoose");

const URL = "mongodb://localhost/mern-tasks";

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => console.log("DB is connected"))
  .catch(err => console.log(err));

module.exports = mongoose;
