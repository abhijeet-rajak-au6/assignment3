const { check, validationResult, query } = require("express-validator");

module.exports = {
  checkValidation(method) {
    console.log(method);
    switch (method) {
      case "CREATE_STATE":
        return [
          check("state_name")
            .not()
            .isEmpty()
            .withMessage("State name cannot be blank")
            .matches(/^[a-zA-Z ]*$/)
            .withMessage("State can only be aphabet"),
        ];
      case "CREATE_DISTRICT":
        return [
          check("district_name")
            .not()
            .isEmpty()
            .withMessage("District name cannot be blank")
            .not()
            .matches(/[^a-zA-Z0-9 ]/)
            .withMessage("District cannot contain special character"),
        ];
      case "CREATE_CHILD":
        return [
          check("name")
            .not()
            .isEmpty()
            .withMessage("please provide your name")
            .matches(/^[a-zA-Z ]*$/)
            .withMessage("mother name can only be alphabet"),
          check("sex").not().isEmpty().withMessage("please provide gender"),
          check("dob")
            .not()
            .isEmpty()
            .withMessage("please provide dobs")
            .isDate()
            .withMessage("dob is not a valid date"),
          check("father_name")
            .not()
            .isEmpty()
            .withMessage("please provide father name")
            .matches(/^[a-zA-Z ]*$/)
            .withMessage("State can only be aphabet"),
          check("mother_name")
            .not()
            .isEmpty()
            .withMessage("please provide mother name")
            .matches(/^[a-zA-Z ]*$/)
            .withMessage("mother name can only be alphabet"),
          check("photo").not().isEmpty().withMessage("please provide photo"),
        ];

      default:
        return "Invalid Method";
    }
  },
};
