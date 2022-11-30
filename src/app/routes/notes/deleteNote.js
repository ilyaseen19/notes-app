const express = require("express");
const Notes = require("../../model/notes");

const router = express.Router();

router.delete("/removeNote/:_id", async (req, res) => {
  try {
    const deleted = await Notes.findOneAndDelete({ _id: req.params._id });

    if (!deleted)
      return res.status(400).json({
        success: 0,
        message: "Could not delete note",
      });

    if (deleted)
      return res.status(200).json({
        success: 1,
        message: "Note removed successfully",
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
