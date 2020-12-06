const stateModel = require("../models/State");
const districtModel = require("../models/District");
const childModel = require("../models/Child");
const cloudinary = require("../cloudinary");
const convert = require("../converter");
const { validationResult } = require("express-validator");

module.exports = {
  async createState(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(403).send({
          success: false,
          message: "Got error while saving",
          status: 401,
          ERROR: errors.array()[0].msg,
        });
      }
      const newState = new stateModel({
        ...req.body,
        timestamp: new Date().getTime(),
      });
      await newState.save();

      return res.status(200).send({
        success: true,
        status: 200,
        timestamp: new Date().getTime(),
        message: "Operation performed sucessfully",
      });
    } catch (error) {
      if (error.message.includes("E11000 duplicate key error")) {
        return res.status(403).send({
          success: false,
          staus: 403,
          message: "This state already exists",
        });
      }
      return res.status(500).send({
        success: false,
        status: 500,
        message: error.message,
      });
    }
  },
  async getAllState(req, res) {
    try {
      const allStates = await stateModel.find({});
      return res.status(200).send({
        success: true,
        status: 200,
        timestamp: new Date().getTime(),
        message: "State Detail",
        state: allStates,
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        status: 500,
        message: error.message,
      });
    }
  },

  async createDistrict(req, res) {
    try {
      const { state_id, district_name } = req.body;
      console.log("in craeet district");
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(403).send({
          success: false,
          message: "Got error while saving",
          status: 401,
          ERROR: errors.array()[0].msg,
        });
      }
      const newDistrict = new districtModel({
        state_id,
        district_name,
      });

      await newDistrict.save();
      return res.status(200).send({
        success: true,
        status: 200,
        timestamp: new Date().getTime(),
        message: "Operation performed sucessfully",
      });
    } catch (error) {
      if (error.message.includes("E11000 duplicate key error")) {
        return res.status(403).send({
          success: false,
          staus: 403,
          message: "This district already exists",
        });
      }
      return res.status(500).send({
        success: false,
        status: 500,
        message: error.message,
      });
    }
  },

  async getDistrict(req, res) {
    try {
      const { state_id } = req.query;
      const district = await districtModel.find({ state_id });
      return res.status(200).send({
        success: true,
        status: 200,
        timestamp: new Date().getTime(),
        message: "District Detail",
        district: district,
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        status: 500,
        message: error.message,
      });
    }
  },

  async uploadPhoto(req, res) {
    try {
      console.log("upload");
      const imageContent = convert(req.file.originalname, req.file.buffer);
      const image = await cloudinary.uploader.upload(imageContent);
      console.log("image", image);
      return res.status(200).send({
        success: true,
        status: 200,
        timestamp: new Date().getTime(),
        message: "image url",
        photo: image.secure_url,
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        status: 500,
        message: error.message,
      });
    }
  },

  async createChild(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(403).send({
          success: false,
          message: "Got error while saving",
          status: 401,
          ERROR: errors.array(),
        });
      }
      const newChild = new childModel({
        ...req.body,
      });
      await newChild.save();
      return res.status(200).send({
        success: true,
        status: 200,
        timestamp: new Date().getTime(),
        message: "Operation performed sucessfully",
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        status: 500,
        message: error.message,
      });
    }
  },

  async getChildProfile(req,res){
    try {
        const getAllChildProfile = await childModel.find({});
        return res.status(200).send({
          success:true,
          status:200,
          message:"Child Profile Details",
          timestamp: new Date().getTime(),
          child_profile:getAllChildProfile
        })
    } catch (error) {
      return res.status(500).send({
        success: false,
        status: 500,
        message: error.message,
      });
    }
  }
};
