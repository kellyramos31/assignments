const express = require("express")
const foodRouter = express.Router()
const { v4: uuidv4 } = require('uuid'); 

const foods = [
    {name: "muffin",
     type: "food",
     isHot: false,
     flavor: "blueberry",
     price:  2.00,
      _id: uuidv4()
    },

      {name: "cookie",
     type: "food",
     isHot: false,
     flavor: "chocolate chip",
     price:  3.00,
      _id: uuidv4()
    },

      {name: "sandwich",
     type: "food",
     isHot: false,
     flavor: "turkey and avocado",
     price:  5.00,
      _id: uuidv4()
    },

        {name: "sandwich",
     type: "food",
     isHot: true,
     flavor: "bacon, egg and cheese",
     price:  5.00,
      _id: uuidv4()
    }

]


//GET ALL Request
foodRouter.get("/", (req, res)=>{
    res.send(foods)
})


//GET & FILTER BY NAME
foodRouter.get("/search/name", (req, res)=>{
    const name = req.query.name
    const filteredNames = foods.filter(food=>food.name === name)
    res.send(filteredNames)
})


module.exports = foodRouter