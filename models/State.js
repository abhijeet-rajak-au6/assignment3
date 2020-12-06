const { Schema, model } = require("mongoose");
const stateSchema = Schema({
  state_name: {
    type: String,
    unique:true,
    required: [true, "Please provide your name"],
  },
});

const stateModel = model("state", stateSchema);

module.exports = stateModel;