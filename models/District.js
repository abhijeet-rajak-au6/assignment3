const { Schema, model } = require("mongoose");
const districtSchema = Schema({
  district_name: {
    type: String,
    unique: true,
    required: [true, "Please provide district name"],
  },

  state_id: {
    type: Schema.Types.ObjectId,
    ref: "state",
  },
});

const districtModel = model("district", districtSchema);

module.exports = districtModel;
