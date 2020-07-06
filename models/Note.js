const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxlength: [128, "Title can not be more than 128 characters long!"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [256, "Description can not be more than 256 characters long!"],
  },
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
