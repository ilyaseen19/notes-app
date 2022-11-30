const express = require("express");
const Notes = require("../../model/notes");

const router = express.Router();

router.patch("/updateNote/:_id", async (req, res) => {
  try {
    const { title, noteBody } = req.body;
    await Notes.updateOne({ _id: req.params._id }, { title, note: noteBody });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: 0,
      message: "Internal error with code(500)",
    });
  }
});

module.exports = router;
