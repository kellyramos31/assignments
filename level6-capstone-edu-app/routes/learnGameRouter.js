const express = require("express");
const { isValidObjectId } = require("mongoose");
const learnGameRouter = express.Router();
const Flashcard = require("../models/flashcard.js");
const Game = require("../models/game.js");

//GET ALL FLASHCARDS
learnGameRouter.get("/learn", (req, res, next) => {
Flashcard.find((err, flashcards) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(flashcards);
    });
});

// //GET COMMENTS FOR INDIVIDUAL USER
// commentRouter.get("/user", (req, res, next)=>{
//     Comment.find({_user: req.user._id}, (err, comments)=>{
//         if(err) {
//             res.status(500)
//             return next(err)
//         }
//         console.log("comments", comments)
//         return res.status(200).send(comments)
//     })
// })


//NOTE:  THIS ONE WORKS TO ADD COMMENT, BUT....NOT PUSHING TO ARRAY
learnGameRouter.post("/learn", (req, res, next) => {
    req.body._user = req.user._id
    const flashcard = new Flashcard(req.body);

    flashcard.save(function(err, newFlashcard) {
        if (err) {
            res.status(500)
            return next(err)
        }
                 
        return res.status(201).send(newFlashcard);
    })
})

//TRYING TO MODIFY COMMENT ADD/POST TO WORK ON FRONTEND:
// commentRouter.post("/", (req, res, next) => {
//     const _user = req.user._id
//     const { commentText, _issue } = req.body 
//      const comment = new Comment({
//        commentText,
//        _issue,
//        _user
//      })
 

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
//NOTE:  this is returning the issue with the comment, BUT -- NOT the comment
// commentRouter.post("/", (req, res, next) => {
//     req.body._user = req.user._id
//     // req.body.username = req.user._id.username
      
//     const comment = new Comment(req.body);

//     comment.save(function(err, newComment) {
//           if (err) {
//             res.status(500)
//             return next(err)
//         }
   
//     const postId = req.body._issue
      
//         Post.findByIdAndUpdate(
//             {_id: issueId, _user: req.user._id},
//             { $push: { "_comments": newComment._id}},
//             { new: true},
//         (err, updatedIssue) => {
//             if (err) {
//                 console.log("Error");
//                 res.status(500);
//                 return next(err);
//             }
//             return res.send(newComment);
//         })
//     })
// })





//TRYING TO RECONFIGURE SO WORKS ON FRONTEND***
// commentRouter.post("/", (req, res, next) => {
//     const {commentText, _issue } = req.body
//     console.log("req.body:", req.body)
//     // req.body._user = req.user._id
//     const comment = new Comment({
//         commentText,
//         _issue
//     })

//     comment.save().then((err, omment) => {
//           if (err) {
//             res.status(500)
//             return next(err)
//           }
        
//     })
                 
//     const issueId = req.body._issue
    
      
//         Issue.findByIdAndUpdate(
//             {_id: issueId, _user: req.user._id},
//             { $push: { "_comments": newComment._id }},
//             { new: true},
//         (err, commentId) => {
//             if (err) {
//                 console.log("Error");
//                 res.status(500);
//                 return next(err);
//             }
//              return res.status(201).send(commentId, newComment)
//         })
//     })



// import db from './../models';

// const userController = {};

// userController.post = (req, res) => {
//   const { username, password } = req.body;
//   console.log(req.body);
//   // Validation

//   const user = new db.User({
//     username,
//     password
//   });

//   user.save().then((newUser) => {
//     res.status(200).json({
//       success: true,
//       data: newUser,
//     });
//   }).catch((err) => {
//     res.status(500).json({
//       message: err,
//     });
//   });
// }

// export default userController;


//DELETE COMMENT -- this works but leaves comment ids still attached to parent issue in array
// commentRouter.delete("/:commentId", (req, res, next)=> {
//     Comment.findOneAndDelete(
//     { _id: req.params.commentId, _user: req.user._id },
//     (err, deletedComment) => {
//         if (err) {
//             res.status(500);
//             return next(err) 
//         }
//         return res.status(200).send(`Successfully deleted comment: ${deletedComment.commentText}`);
//     })
// })

//DELETE COMMENT from _comments array in issue model
// commentRouter.delete("/deleteCommentFromIssue/:commentId", (req, res, next)=> {
//         // const issueId = req.body._issue
//         // const ObjectId = require('mongodb').ObjectId 
//         Post.findByIdAndUpdate(
//             {_id: req.body._post, _user: req.user._id},
//             { $pull: { "_comments": req.params.commentId}},
//         (err, updatedIssue) => {
//             if (err) {
//                 console.log("Error");
//                 res.status(500);
//                 return next(err);
//             }
//             return res.send(updatedIssue);
//         })
//     })


//EDIT COMMENT
// commentRouter.put("/:commentId", (req, res, next) => {
//     Comment.findByIdAndUpdate(
//         {_id: req.params.commentId, _user: req.user._id},
//         req.body,
//         { new: true },
//         (err, comment) => {
//             if (err) {
//                 console.log("Error");
//                 res.status(500);
//                 return next(err);
//             }
//             return res.send(comment);
//         })
// })

//UPVOTE A COMMENT-INCREMENT -- this one works to increment vote count --but can vote as many times as want to...
// commentRouter.put("/upvoteit/:commentId", (req, res, next)=> {			
//   Comment.findByIdAndUpdate(			
//   {_id: req.params.commentId, _user: req.user._id },	
//   { $inc: {upVotesComments: 1, totalVotersOnCommentCount: 1} },			
//   {new: true},			
//   (err, updatedComment)=> {			
//       if(err){			
//           res.status(500)			
//           return next(err)			
//       }			
//       return res.status(201).send(updatedComment)			
//    }			
//   )			
// })

//VOTE ON AN ISSUE (adds to _voters array but only ONCE) -- NOTE:  seems to ??MAYBE?? work NOW -- BUT...how implement with rest on front-end??
// commentRouter.put("/voter/onlyonce/:commentId", (req, res, next)=> {		

// Comment.updateOne(
//     {_id: req.params.commentId}, 
//     { $addToSet: { _voters: req.user._id } },


// (err, issues)=> {
//     if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(201).send(issues);
// })
// })
		


//DOWNVOTE AN ISSUE--DECREMENT this works to decrement vote count === but can downVote as many times as want
// commentRouter.put("/downvoteit/:commentId", (req, res, next)=> {			
//   Comment.findByIdAndUpdate(			
//   {_id: req.params.commentId, _user: req.user._id },		//maybe don't need _user: req.user._id here??
//   { $inc: {downVotesComments: 1, totalVotersOnCommentCount: 1} },			
//   {new: true},			
//   (err, updatedComment)=> {			
//       if(err){			
//           res.status(500)			
//           return next(err)			
//       }			
//       return res.status(201).send(updatedComment)		
//    }			
//   )			
// })	



module.exports = learnGameRouter;