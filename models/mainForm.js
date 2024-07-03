const mongoose = require("mongoose");

//define a schema
const mainSchema = new mongoose.Schema({
  ID: {
    type: Number,
    default: 0,
  },
  Group: {
    type: Number,
    default: 8,
  },
  MotExt1: {
    type: Number,
    default: 0,
  },
  MotInt1: {
    type: Number,
    default: 0,
  },
  Tran1: {
    type: Number,
    default: 0,
  },
  Qua1: {
    type: Number,
    default: 0,
  },
  Cre1: {
    type: Number,
    default: 0,
  },
  MotExt2: {
    type: Number,
    default: 0,
  },
  MotInt2: {
    type: Number,
    default: 0,
  },
  Tran2: {
    type: Number,
    default: 0,
  },
  Qua2: {
    type: Number,
    default: 0,
  },
  Cre2: {
    type: Number,
    default: 0,
  },
  MotExt3: {
    type: Number,
    default: 0,
  },
  MotInt3: {
    type: Number,
    default: 0,
  },
  Tran3: {
    type: Number,
    default: 0,
  },
  Qua3: {
    type: Number,
    default: 0,
  },
  Cre3: {
    type: Number,
    default: 0,
  },
  MotExt4: {
    type: Number,
    default: 0,
  },
  MotInt4: {
    type: Number,
    default: 0,
  },
  Tran4: {
    type: Number,
    default: 0,
  },
  Qua4: {
    type: Number,
    default: 0,
  },
  Cre4: {
    type: Number,
    default: 0,
  },
  MotExt5: {
    type: Number,
    default: 0,
  },
  MotInt5: {
    type: Number,
    default: 0,
  },
  Tran5: {
    type: Number,
    default: 0,
  },
  Qua5: {
    type: Number,
    default: 0,
  },
  Cre5: {
    type: Number,
    default: 0,
  },
  Quality1: {
    type: Number,
    default: 0,
  },
  Quality2: {
    type: Number,
    default: 0,
  },
  Quality3: {
    type: Number,
    default: 0,
  },
  Quality4: {
    type: Number,
    default: 0,
  },
  Quality5: {
    type: Number,
    default: 0,
  },
  Credibility1: {
    type: Number,
    default: 0,
  },
  Credibility2: {
    type: Number,
    default: 0,
  },
  Credibility3: {
    type: Number,
    default: 0,
  },
  Credibility4: {
    type: Number,
    default: 0,
  },
  Credibility5: {
    type: Number,
    default: 0,
  },
  Credibility6: {
    type: Number,
    default: 0,
  },
  Credibility7: {
    type: Number,
    default: 0,
  },
});
// create a model for consents
const mainForm = mongoose.model("Mainquestionnaire", mainSchema);

module.exports = mainForm;
