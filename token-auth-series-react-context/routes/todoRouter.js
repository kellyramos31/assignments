const express = require("express");
const todoRouter = express.Router();
const Todo = require("../models/todo");


//Get all todos
todoRouter.get("/", (req, res, next) => {
    Todo.find((err, todos) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(todos);
    });
});

//Add new todo
todoRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const todo = new Todo(req.body);
    todo.save(function (err, newTodo) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newTodo);
    });
});

//Get one todo
todoRouter.get("/:todoId", (req, res, next) => {
    Todo.findById(req.params.todoId, (err, todo) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!todo) {
            res.status(404)
            return next(new Error("No todo item found."));
        }
        return res.send(todo);
    });
});


//Edit todo
todoRouter.put("/:todoId", (req, res, next) => {
    Todo.findByIdAndUpdate(
        req.params.todoId,
        req.body,
        { new: true },
        (err, todo) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(todo);
        }
    );
});

//Delete todo
todoRouter.delete("/:todoId", (req, res, next) => {
    Todo.findByIdAndRemove(req.params.todoId, 
    (err, deletedTodo) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(`Successfully deleted: ${deletedTodo.title}`);
    });
    })

module.exports = todoRouter;
