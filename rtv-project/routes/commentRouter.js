const express = require("express");
const { isValidObjectId } = require("mongoose");
const commentRouter = express.Router();
const Comment = require("../models/comment.js");
const Issue = require("../models/issue.js");

//Get all comments
commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(comments);
    });
});

//Get comments by user id
commentRouter.get("/user", (req, res, next)=>{
    Comment.find({user: req.user._id}, (err, comments)=>{
        if(err) {
            res.status(500)
            return next(err)
        }
        console.log("comments", comments)
        return res.status(200).send(comments)
    })
})


//THIS ONE WORKS TO ADD COMMENT, BUT....NOT PUSHING TO ARRAY
//ADD NEW COMMENT
commentRouter.post("/", (req, res, next) => {

    const comment = new Comment(req.body);

    comment.save(function(err, newComment) {
        if (err) {
            res.status(500)
            return next(err)
        }
          Issue.findByIdAndUpdate(
            {_id: req.body.issue},
            { $push: { "_comments": newComment._id } })
            
        if (err) {
            res.status(500);
            return next(err);
        }
         return res.status(201).send(newComment);
    })
})




 







        
    
    // Issue.findByIdAndUpdate(
        //     {_id: req.body.issueId},
        //     { $push: { "_comments": newComment._id } })
            
        // if (err) {
        //     res.status(500);
        //     return next(err);
        // }
     
            
    
  



module.exports = commentRouter;