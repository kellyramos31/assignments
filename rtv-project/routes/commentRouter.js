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

//GET COMMENTS FOR INDIVIDUAL USER
commentRouter.get("/user", (req, res, next)=>{
    Comment.find({_user: req.user._id}, (err, comments)=>{
        if(err) {
            res.status(500)
            return next(err)
        }
        console.log("comments", comments)
        return res.status(200).send(comments)
    })
})


//NOTE:  THIS ONE WORKS TO ADD COMMENT, BUT....NOT PUSHING TO ARRAY
// commentRouter.post("/", (req, res, next) => {
//     req.body._user = req.user._id
//     const comment = new Comment(req.body);

//     comment.save(function(err, newComment) {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
                 
//         return res.status(201).send(newComment);
//     })
// })

   
//TRY TO JUST PUSH COMMENT ID TO ISSUES ARRAY...THIS NOW PUSHES COMMENT ID TO ISSUES ARRAY
// commentRouter.put("/pusharray/:commentId", (req, res, next) => {
//        const issueId = req.body._issue
//         Issue.findByIdAndUpdate(
//             {_id: issueId, _user: req.user._id},
//             { $push: { "_comments": req.params.commentId }},
//             { new: true},
//         (err, commentId) => {
//             if (err) {
//                 console.log("Error");
//                 res.status(500);
//                 return next(err);
//             }
//             return res.send(commentId);
//         })
//     })


//COMBINES THE TWO ROUTES DIRECTLY ABOVE (THE ADD COMMENT & UPDATE COMMENTS ARRAY WITHIN ISSUES REQUESTS)***
commentRouter.post("/", (req, res, next) => {
    req.body._user = req.user._id
    const comment = new Comment(req.body);

    comment.save(function(err, newComment) {
          if (err) {
            res.status(500)
            return next(err)
        }
                 
    const issueId = req.body._issue
      
        Issue.findByIdAndUpdate(
            {_id: issueId, _user: req.user._id},
            { $push: { "_comments": newComment._id }},
            { new: true},
        (err, commentId) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(commentId);
        })
    })
      
    })


//DELETE COMMENT
commentRouter.delete("/:commentId", (req, res, next)=> {
    Comment.findOneAndDelete(
    { _id: req.params.commentId, _user: req.user._id },
    (err, deletedComment) => {
        if (err) {
            res.status(500); 
        }
        return res.status(200).send(`Successfully deleted: ${deletedComment.commentText}`);
    })
})

//EDIT COMMENT
commentRouter.put("/:commentId", (req, res, next) => {
    Comment.findByIdAndUpdate(
        {_id: req.params.commentId, _user: req.user._id},
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