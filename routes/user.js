const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// GET /user
router.get("/", userController.getAllUser);

//GET /register
router.post("/register", userController.registerUser);

module.exports = router;
