const express = require("express");
const Notes = require("../../model/notes");

const router = express.Router();

router.get("/getNotes", async (req, res) => {
  try {
    const notes = await Notes.find();
    if (notes.length === 0)
      return res.status(200).json({
        success: 0,
        message: "No notes found, please create one",
      });

    return res.status(200).json({
      success: 1,
      data: notes,
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
