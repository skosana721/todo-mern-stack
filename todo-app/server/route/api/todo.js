const express = require("express");

const Todo = require("../../model/todo");

const todoListApi = (app) => {
  app.get("/api/todo", async (req, res) => {
    try {
      const results = await Todo.find();
      res.status(200).json(results);
    } catch (error) {
      res.status(404).json(error);
    }
  });

  app.post("/api/todo", async (req, res) => {
    const { todo } = req.body;

    try {
      const newTodo = new Todo({
        todo,
      });
      newTodo.save();
      res.json(newTodo);
    } catch (error) {
      res.status(400).json(error);
    }
  });
  app.delete("/api/todo/:id", async (req, res) => {
    try {
      const deletedTodo = await Todo.deleteOne({ _id: req.params.id });

      res.status(200).json(deletedTodo);
    } catch (error) {
      res.status(400).json(error);
    }
  });
  app.put("/api/todo/:id", async (req, res) => {
    try {
      const updatedTodos = await Todo.updateOne(
        { _id: req.params.id },
        { todo: req.body.edit }
      );
      res.status(200).json(updatedTodos);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};
module.exports = { todoListApi };
