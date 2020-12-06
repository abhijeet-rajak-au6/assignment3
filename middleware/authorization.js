const { sign, verify } = require("jsonwebtoken");
const userModel = require("../models/User");

module.exports = {
  async authorization(req, res, next) {
    console.log("auth");
    try {
      let token = verify(req.headers.token, process.env.PRIVATE_KEY);
      // console.log(token);
      req.user = token;
      next();
    } catch (err) {
      res.status(401).send({ success: false, status: 401 ,msg: "Authentication failed" });
    }
  },
};
