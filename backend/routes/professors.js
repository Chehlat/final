const express = require("express");

const {
  createProfessor,
  getProfessor,
  getProfessors,
  deleteProfessor,
  updateProfessor,
} = require("../controllers/professorController");

const router = express.Router();

router.get("/", getProfessors);
router.get("/:id", getProfessor);
router.post("/", createProfessor);
router.delete("/:id", deleteProfessor);
router.patch("/:id", updateProfessor);

module.exports = router;
