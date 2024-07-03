const mongoose = require("mongoose");

//define a schema
const friendSchema = new mongoose.Schema({
  ID: {
    type: Number,
    default: 0,
  },
  Group: {
    type: Number,
    default: 8,
  },
  name1: {
    type: String,
    require: true,
    default: "None",
  },
  name2: {
    type: String,
    require: true,
    default: "None",
  },
  name3: {
    type: String,
    require: true,
    default: "None",
  },
  name4: {
    type: String,
    require: true,
    default: "None",
  },
  name5: {
    type: String,
    require: true,
    default: "None",
  },
  STS1: {
    type: Number,
    default: 0,
  },
  STS2: {
    type: Number,
    default: 0,
  },
  STS3: {
    type: Number,
    default: 0,
  },
  STS4: {
    type: Number,
    default: 0,
  },
  STS5: {
    type: Number,
    default: 0,
  },
});
// create a model for consents
const friendForm = mongoose.model("Friend", friendSchema);

module.exports = friendForm;
