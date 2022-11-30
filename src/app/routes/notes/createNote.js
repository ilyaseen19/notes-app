const express = require("express");
const Notes = require("../../model/notes");

const router = express.Router();

router.post("/createNote", async (req, res) => {
  try {
    const { title, noteBody } = req.body;
    const note = await Notes.findOne({ title });

    if (note)
      return res.status(400).json({
        success: 0,
        message: "A note with this title already exist",
      });

    const newNote = new Notes({
      title,
      note: noteBody,
    });

    const savedNote = await newNote.save();

    if (savedNote)
      return res.status(201).json({
        success: 1,
        message: "note created succefully",
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
