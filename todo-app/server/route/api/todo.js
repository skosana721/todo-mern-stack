const express = require("express");
const Todo = require("../../model/todo");
const router = express.Router();

router.get("/api/todo", (req, res) => {
  res.send("Hello World");
});
router.post("/api/todo", (req, res) => {
  const newTodo = new Todo({
    todo: req.body.todo,
  });
  newTodo.save();
});
module.exports = router;
