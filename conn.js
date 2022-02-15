const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/merncrud");

const dbobject = mongoose.connection;

dbobject.on("connected", () => {
  console.log("Mongo DB connection successfull");
});

dbobject.on("error", () => {
  console.log("Monog db connection failed");
});
module.exports = mongoose;
