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

  app.post("/api/todo", async (req, res) => {
    const { todo } = req.body;

    try {
      const newTodo = new Todo({
        todo: todo,
      });
      newTodo.save();
      res.json(newTodo);
    } catch (error) {
      res.status(404).json(error);
    }
  });
};
module.exports = { todoListApi };
