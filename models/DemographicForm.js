const mongoose = require("mongoose");

//define a schema
const demographicSchema = new mongoose.Schema({
  ID: {
    type: Number,
    default: 0,
  },
  Group: {
    type: Number,
    default: 0,
  },
  gender: {
    type: Number,
    default: 0,
  },
  age: {
    type: Number,
    default: 0,
  },
  education: {
    type: Number,
    default: 0,
  },
  job: {
    type: Number,
    default: 0,
  },
  location: {
    type: Number,
    default: 0,
  },
  DG01: {
    type: Number,
    default: 0,
  },
  DG02: {
    type: Array,
    default: 0,
  },
  DG03: {
    type: Array,
    default: 0,
  },
  DG04: {
    type: Number,
    default: 0,
  },
  DG05: {
    type: Array,
    default: 0,
  },
  DG06: {
    type: Number,
    default: 0,
  },
  DG07: {
    type: Number,
    default: 0,
  },
});
// create a model for consents
const demographicForm = mongoose.model("Demographic", demographicSchema);

module.exports = demographicForm;
