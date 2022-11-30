const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    note: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", notesSchema);
