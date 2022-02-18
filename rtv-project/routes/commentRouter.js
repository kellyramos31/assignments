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
    Comment.find({user: req._user}, (err, comments)=>{
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


//ADD NEW COMMENT for a specific user
commentRouter.post("/user", (req, res, next) => {
    req.body._user = req.user._id
    req.body._issue = req.issue._id
    const comment = new Comment(req.body.commentText);

    comment.save(function(err, newComment) {
        if (err) {
            res.status(500)
            return next(err)
        }
                 
        return res.status(201).send(newComment);
    })
})
    //$ push not working to update array here       
    // Issue.findOneAndUpdate(
    //         {_id: req.issue._id},
    //         { $push: { "_comments": newComment._id } })
    //     if (err) {
    //         res.status(500)
    //         return next(err)
    //     }
         
    //      return res.status(201).send(newComment);
    // })




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