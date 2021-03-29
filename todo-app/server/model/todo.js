const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

let todo = mongoose.model("Todo", todoSchema);

module.exports = todo;
