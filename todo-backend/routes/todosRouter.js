const express = require("express")
const todosRouter = express.Router()
const { v4: uuidv4 } = require('uuid'); 

//TODOs- "Fake Data"
const todos = [
    {
    "name": "school",
    "description": "complete coding assignment",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": uuidv4()
},
    {
    "name": "home",
    "description": "clean kitchen",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": uuidv4()
},
    {
    "name": "dinner",
    "description": "pick up meal order",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": uuidv4()
},
    {
    "name": "shopping",
    "description": "find festive halloween shirt",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": uuidv4()
},
    {
    "name": "halloween decorations",
    "description": "find awesome pumpkin for porch",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": uuidv4()
},
    {
    "name": "car",
    "description": "schedule maintenance service",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": uuidv4()
},
    {
    "name": "dentist",
    "description": "schedule 6 mo cleaning",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": uuidv4()
},
    {
    "name": "vaccine",
    "description": "schedule flu vaccine date",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": uuidv4()
}
]


//GET ALL Request
todosRouter.get("/", (req, res)=>{
    res.send(todos)
})

//GET ONE Request
todosRouter.get("/:todoId", (req, res)=>{
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo=>todo._id === todoId)
    res.send(foundTodo)
})


//POST ONE Request
todosRouter.post("/", (req, res)=>{
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send("newTodo successfully added!")
})


//DELETE ONE Request
todosRouter.delete("/:todoId", (req, res)=>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo=>todo._id = todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted todo!")
})


//PUT Request to UPDATE ONE
todosRouter.put("/:todoId", (req, res)=>{
   const todoId = req.params.todoId
   const todoIndex = todos.findIndex(todo=>todo._id = todoId)
   const updatedTodo = Object.assign(todos[todoIndex], req.body)
   res.send(updatedTodo)
})


module.exports = todosRouter