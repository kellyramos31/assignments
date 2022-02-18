const express = require("express");
const { isValidObjectId } = require("mongoose");
const commentRouter = express.Router();
const Comment = require("../models/comment.js");
const Issue = require("../models/issue.js");

//GET ALL COMMENTS
commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(comments);
    });
});

//GET COMMENTS BY USER ID
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


//NOTE:  THIS ONE WORKS TO ADD COMMENT, BUT....NOT PUSHING TO ARRAY
//NOT SURE THIS IS SET UP CORRECTLY -- with user/issue refs

//ADD NEW COMMENT
commentRouter.post("/user", (req, res, next) => {

    const comment = new Comment(req.body);

    comment.save(function(err, newComment) {
        if (err) {
            res.status(500)
            return next(err)
        }
        
    //$ push not working to update array here       
    Issue.findOneAndUpdate(
            {_id: req.body.issue },
            { $push: { "comments": newComment._id } })
        if (err) {
            res.status(500)
            return next(err)
        }
         
         return res.status(201).send(newComment);
    })
})


//DELETE COMMENT
commentRouter.delete("/user/:commentId", (req, res, next)=> {
    Comment.findOneAndDelete(
    { _id: req.params.commentId, user: req.user._id },
    (err, deletedComment) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(`Successfully deleted: ${deletedComment.commentText}`);
    })
})

//EDIT COMMENT
commentRouter.put("/user/:commentId", (req, res, next) => {
    Comment.findByIdAndUpdate(
        {_id: req.params.commentId, user: req.user._id},
    // Todo.findByIdAndUpdate(
        // req.params.todoId,
        req.body,
        { new: true },
        (err, comment) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(comment);
        })
})




module.exports = commentRouter;