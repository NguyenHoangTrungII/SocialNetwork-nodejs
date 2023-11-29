const models = require("../models");
const User = models.user;
// const bcrypt = require("bcrypt");

const userController = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  //REGISTER
  registerUser: async (req, res) => {
    try {
      const {
        username,
        password,
        name,
        email,
        phone,
        role,
        gender,
        address,
        birthday,
      } = req.body;

      const userExists = await User.findOne({ where: { username } });
      const emailExists = await User.findOne({ where: { email } });
      const phoneExists = await User.findOne({ where: { phone } });

      if (role) {
        return res
          .status(409)
          .json({ error: "You cannot set the role property." });
      }
      if (userExists) {
        return res.status(409).json({ error: "User already exists" });
      }
      if (emailExists) {
        return res.status(409).json({ error: "This email has been used" });
      }
      if (phoneExists) {
        return res
          .status(409)
          .json({ error: "This phone number has been used" });
      }

      await User.create({
        username,
        password,
        name,
        email,
        phone,
        gender,
        address,
        birthday,
      });

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  },

  //LOGIN
};

module.exports = userController;
