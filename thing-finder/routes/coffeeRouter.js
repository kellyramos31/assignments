const express = require("express")
const coffeeRouter = express.Router()
const { v4: uuidv4 } = require('uuid'); 


//FAKE COFFEE DATA
const coffees = [
    {name: "latte",
     type: "drink",
     isHot: true,
     flavor: "none",
     price:  2.50,
     _id: uuidv4()
    },

     {name: "latte",
     type: "drink",
     isHot: true,
     flavor: "pumpkin spice",
     price:  3.95,
     _id: uuidv4()
    },
    
    {name: "mocha",
     type: "drink",
     isHot: true,
     flavor: "chocolate",
     price:  3.50,
      _id: uuidv4()
    },
     {name: "frappuccino",
     type: "drink",
     isHot: false,
     flavor: "vanilla",
     price:  4.25,
      _id: uuidv4()
    },
    {name: "frappuccino",
     type: "drink",
     isHot: false,
     flavor: "apple crisp",
     price:  4.75,
      _id: uuidv4()
    },

        {name: "frappuccino",
     type: "drink",
     isHot: false,
     flavor: "chocolate",
     price:  4.25,
      _id: uuidv4()
    },
      {name: "cappuccino",
     type: "drink",
     isHot: true,
     flavor: "caramel",
     price:  4.00,
      _id: uuidv4()
    },
          {name: "caffe americano",
     type: "drink",
     isHot: true,
     flavor: "none",
     price:  3.75,
      _id: uuidv4()
    },

    {name: "pike place decaf",
     type: "drink",
     isHot: true,
     flavor: "none",
     price:  3.00,
      _id: uuidv4()
    },

        {name: "iced coffee",
     type: "drink",
     isHot: false,
     flavor: "vanilla",
     price:  3.50,
      _id: uuidv4()
    },

      {name: "iced coffee",
     type: "drink",
     isHot: false,
     flavor: "pumpkin spice",
     price:  3.50,
      _id: uuidv4()
    },

 
]


//GET ALL Request
coffeeRouter.get("/", (req, res)=>{
    res.send(coffees)
})

//GET & FILTER BY FLAVOR
coffeeRouter.get("/search/flavor", (req, res)=>{
    const flavor = req.query.flavor
    const filteredFlavors = coffees.filter(coffee=>coffee.flavor === flavor)
    res.send(filteredFlavors)
})



//  NEED TO FIGURE OUT HOW TO WRITE THIS
//GET & FILTER BY PRICE -- need a min and a max; default min = 0; default max = 10000
coffeeRouter.get("/search/price", (req, res)=>{
    const minPrice = req.query.minPrice
    const maxPrice = req.query.maxPrice
    const filteredPrices = coffees.filter(coffee=>coffee.price >= minPrice & coffee.price<= maxPrice)
    res.send(filteredPrices)
})



//POST ONE Request
// coffeeRouter.post("/", (req, res)=>{
//     const newCoffee = req.body
//     newCoffee._id = uuidv4()
//     coffees.push(newCoffee)
//     res.send("newCoffee successfully added!")
// })




module.exports = coffeeRouter
