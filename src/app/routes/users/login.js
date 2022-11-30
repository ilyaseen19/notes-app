const express = require("express");
const { _decrypt } = require("../../../libs/encrypt");
const User = require("../../model/users");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (!user)
      return res.status(400).json({
        success: 0,
        message: "User does not exist",
      });

    const decryptedPass = await _decrypt(user.password);

    if (decryptedPass !== password)
      return res.status(400).json({
        success: 0,
        message: "Wrong password, please try again",
      });

    return res.status(200).json({
      success: 1,
      data: user,
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
