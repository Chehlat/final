const { error } = require("console");
const Professor = require("../models/professorsModel");
const mongoose = require("mongoose");

//get all
const getProfessors = async (req, res) => {
  const professors = await Professor.find({}).sort({ createdAt: -1 });
  res.status(200).json(professors);
};
//get one
const getProfessor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "НЕТ ТАКОГО" });
  }
  const professor = await Professor.findById(id);
  if (!professor) {
    return res.status(404).json({ error: "no such profeesor" });
  }
  res.status(200).json(professor);
};
//create a new one
const createProfessor = async (req, res) => {
  const {
    name,
    position,
    degree,
    addres,
    phone,
    tabel_id,
    wage,
    _id,
    start_date,
  } = req.body;
  try {
    const professor = await Professor.create({
      name,
      position,
      degree,
      addres,
      phone,
      _id,
      tabel_id,
      wage,
      start_date,
    });
    res.status(200).json(professor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//delete
const deleteProfessor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "НЕТ ТАКОГО" });
  }
  const professor = await Professor.findOneAndDelete({ _id: id });
  if (!professor) {
    return res.status(404).json({ error: "no such profesor" });
  }
  res.status(200).json(professor);
};
//update
const updateProfessor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "НЕТ ТАКОГО" });
  }
  const professor = await Professor.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!professor) {
    return res.status(404).json({ error: "no such profesor" });
  }
  res.status(200).json(professor);
};

module.exports = {
  createProfessor,
  getProfessor,
  getProfessors,
  deleteProfessor,
  updateProfessor,
};
