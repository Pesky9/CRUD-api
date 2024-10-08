const express = require("express");
const {
  GetNote,
  AddNote,
  UpdateNote,
  DeleteNote,
} = require("../controllers/user.controllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("CRUD Server Running");
});
router.route("/getnote").get(GetNote);
router.route("/addnote").post(AddNote);
router.route("/updatenote").post(UpdateNote);
router.route("/deletenote").delete(DeleteNote);

module.exports = router;
