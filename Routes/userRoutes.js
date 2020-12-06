const { Router } = require("express");
const upload = require("../multer");

// const { checkRegistration  } = require('../middleware/checkUser');
const {
  register,
  login,
  logout,
  dummy,
} = require("../Controller/userController");

const {
  createState,
  getAllState,
  createDistrict,
  getDistrict,
  uploadPhoto,
  createChild,
  getChildProfile
} = require("../Controller/stateController");
const { checkValidation } = require("../middleware/validate");
const { authorization } = require("../middleware/authorization");
const { validationResult, check } = require("express-validator");

const router = Router();

router.get("/", dummy);
router.post("/api/user/register", upload.single(), register);
router.post("/api/user/login", upload.single(), login);
router.get("/api/user/logout", authorization, logout);
router.post(
  "/api/state/create",
  upload.single(),
  [checkValidation("CREATE_STATE"), authorization],
  createState
);
router.get("/api/master/get-state", authorization, getAllState);

router.post(
  "/api/district/create",
  upload.single(),
  [checkValidation("CREATE_DISTRICT"), authorization],
  createDistrict
);
router.get("/api/master/get-district", authorization,getDistrict);
router.post("/api/upload-image/s3-upload" ,authorization, upload.single("image"),uploadPhoto)

router.post("/api/beneficiary/child-profile-create", [checkValidation("CREATE_CHILD"),authorization],createChild);

router.get("/api/beneficiary/get-child-profile", authorization, getChildProfile )




// router.delete("/api/v1/user/:id", authorization, deleteUser);
// router.patch(
//   "/api/v1/user/:id",
//   [checkValidation("UPDATE_USER"), authorization],
//   updateUser
// );

// router.get("/api/v1/getAllUsers", authorization, getAllUsers);
// router.get("/api/v1/getSingleUser/:id", authorization, getSingleUser);

module.exports = router;
