const mongoose = require("mongoose");
const { type } = require("os");
const { types } = require("util");
const Schema = mongoose.Schema;

const professorsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    addres: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },

    tabel_id: {
      type: Number,
      required: true,
    },
    wage: {
      type: Number,
      required: true,
    },
    start_date: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Professor", professorsSchema);
