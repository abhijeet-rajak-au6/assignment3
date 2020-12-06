const userModel = require("../models/User");
module.exports = {
  async dummy(req, res) {
    try {
      return res.send({
        msg: "successful",
      });
    } catch (error) {
      return res.send({
        err: error.message,
      });
    }
  },

  async register(req, res) {
    try {
      const { password, username } = req.body;
      const count = await userModel.find({}).countDocuments();
      console.log(count);
      // console.log(password, username);
      const newUser = new userModel({
        ...req.body,
        last_login: null,
        login_id: count + 1,
        timestamp: new Date().getTime(),
      });
      const user = await newUser.save();
      return res.status(200).send({
        status: "success",
        msg: "user registerd sucessfully",
      });
    } catch (err) {
      // console.log(err);
      console.log("message", err.message);
    }
  },

  async getAllUsers(req, res) {
    try {
      const allUsers = await userModel.find(
        { createdBy: req.user.id },
        { name: 1, email: 1, phone: 1, _id: 1 }
      );
      return res.status(201).send({
        status: "success",
        users: allUsers,
      });
    } catch (err) {
      return res.status(500).send({
        status: "fail",
        msg: err.message,
      });
    }
  },

  async login(req, res) {
    const { password, username } = req.body;
    if (!password || !username)
      return res
        .status(404)
        .send({ success: false, status: 400, msg: "Invalid Parameter" });
    try {
      const user = await userModel.findByUserNameAndPassword(
        username,
        password
      );
      // console.log('users', user);
      user[0].generateToken();
      user[0].last_login = new Date().getTime();
      user[0].timestamp = new Date().getTime();
      user[0].login_id = user[0].login_id + 1;
      await user[0].save({ validateBeforeSave: false });

      return res.status(200).send({
        success: true,
        status: 200,
        message: "Login successfull",
        token: user[0].token,
        login_id: user[0].login_id,
        last_login: user[0].last_login,
        timestamp: new Date(user[0].timestamp).getTime(),
      });
    } catch (err) {
      return res.status(404).send({ msg: err });
    }
  },

  async logout(req, res) {
    try {
      const currentUser = req.user.id;
      const user = await userModel.findOne({ _id: currentUser });
      if (user) {
        user.token = null;
        // user.refreshToken = null;
        await user.save({ validateBeforeSave: false });
        return res
          .status(200)
          .send({
            success: true,
            status: 200,
            message: "Successfully logged out",
          });
      } else {
        throw Error("Please Login first");
      }
    } catch (err) {}
  },
  async createNewState(req, res) {
    try {
      const { password, email, name, phone } = req.body;
      const newUser = new userModel({ ...req.body, createdBy: req.user.id });
      // await newUser.generateToken();
      // console.log("new user token",newUser.token);
      const user = await newUser.save();
      return res.status(200).send({
        status: "success",
        msg: "user created sucessfully",
        // token: user.token,
      });
    } catch (err) {
      console.log(err);
      if (err.message.includes("phone")) {
        return res.status(403).send({ msg: "please provide unique phone no" });
      } else if (err.message.includes("email")) {
        return res.status(403).send({ msg: "please provide unique email id" });
      }
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const errors = validationResult(req);
      console.log("errors", errors.array());
      if (!errors.isEmpty()) {
        return res.status(403).send({
          errors: errors.array(),
        });
      }
      const user = await userModel
        .findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
        .select("-password");
      console.log(user);
      return res.status(201).send({
        status: "success",
        user: user,
      });
    } catch (err) {
      return res.status(500).send({
        status: "fail",
        msg: err.message,
      });
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      console.log("id", id);
      const result = await userModel.findOneAndDelete({ _id: id });
      console.log("result", result);
      if (!Object.keys(result).length) {
        return res.status(404).send({
          status: "fail",
          msg: "user not found",
        });
      }
      const users = await userModel.find({ createdBy: req.user.id });
      console.log("users ", users);
      return res.status(201).send({
        status: "success",
        msg: "user deleted sucessfully",
        users,
      });
    } catch (err) {
      return res.status(500).send({
        status: "fail",
        msg: err.message,
      });
    }
  },

  async getSingleUser(req, res) {
    try {
      const { id } = req.params;
      const user = await userModel.findOne({ _id: id });
      if (!Object.keys(user).length) {
        return res.status(404).send({
          status: "fail",
          msg: "no user is found",
        });
      }
      return res.status(200).send({
        status: "success",
        user,
      });
    } catch (err) {
      return res.status(500).send({
        status: "fail",
        msg: err.message,
      });
    }
  },
};
