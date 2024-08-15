const UserNote = require("../models/user.models");

const GetNote = async (req, res) => {
  try {
    const notes = await UserNote.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while retrieving notes",
      error: error.message,
    });
  }
};

const AddNote = async (req, res) => {
  const { Title, Description } = req.body;
  const note = await UserNote.create({
    title: Title,
    description: Description,
  });
  if (note) {
    res.status(200).json({ note, message: "Note data saved  successfully" });
  } else {
    res.status(500).json({ error: "Failed to save note data" });
  }
};

const UpdateNote = async (req, res) => {
  const { Id, Title, Description } = req.body;
  try {
    const note = await UserNote.findByIdAndUpdate(
      Id,
      {
        title: Title,
        description: Description,
      },
      { new: true, runValidators: true }
    );

    if (note) {
      res.status(200).json({ note, message: "Note updated successfully" });
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update note data" });
  }
};

const DeleteNote = async (req, res) => {
  const { Id } = req.body;

  try {
    const note = await UserNote.findByIdAndDelete(Id);

    if (note) {
      res.status(200).json({ message: "Note deleted successfully" });
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to  delete the note" });
  }
};

module.exports = { GetNote, AddNote, UpdateNote, DeleteNote };
