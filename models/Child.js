const { Schema, model } = require("mongoose");
const childSchema = Schema({
    name:{
        type:String,
        required:[true,"Please provide name"]
    },
    sex:{
        type:String,
        required:[true,"Please provide sex"]
    },
    dob:{
        type:String,
        required:[true,"Please provide dob"]
    },
    father_name:{
        type:String,
        required:[true,"Please provide father name"]
    },
    mother_name:{
        type:String,
        required:[true,"Please provide mother name"]
    },
    district_id:{
        type:Schema.Types.ObjectId,
        ref:"district"
    },
    photo:{
        type:String,
        required:[true,"Please provide photo"]
    }
 
});

const childModel = model("child", childSchema);

module.exports = childModel;