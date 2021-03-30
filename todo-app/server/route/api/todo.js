const express = require("express");
const Todo = require("../../model/todo");
const router = express.Router();

const todoListApi = (app) => {
  app.get("/api/todo", async (req, res) => {
    try {
      const results = await Todo.find();
      res.status(201).json(results);
    } catch (error) {
      res.status(404).json(error);
    }
  });

  app.post("/api/todo", (req, res) => {
    const newTodo = new Todo({
      todo: req.body.todo,
    });
    newTodo.save();
    res.json(newTodo);
  });
};
module.exports = { todoListApi };
