const express = require("express");
const { _encrypt } = require("../../../libs/encrypt");
const User = require("../../model/users");

const router = express.Router();

router.post("/createUser", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (user)
      return res.status(400).json({
        success: 0,
        message: "A user with this user name already exist",
      });

    let encriptedPass = await _encrypt(password);

    const newUser = new User({
      userName,
      password: encriptedPass,
    });

    const savedUser = await newUser.save();

    if (savedUser)
      return res.status(201).json({
        success: 1,
        message: "User created successfully",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: 0,
      message: "Internal error with code(500)",
    });
  }
});

module.exports = router;
