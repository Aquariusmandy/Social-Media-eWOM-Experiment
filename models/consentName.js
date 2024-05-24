const mongoose = require("mongoose");

//define a schema
const consentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    default: "None",
  },
  ID: {
    type: Number,
    default: 0,
  },
  Group: {
    type: Number,
    default: 0,
  },
});
// create a model for consents
const consentForm = mongoose.model("Consent", consentSchema);

module.exports = consentForm;
