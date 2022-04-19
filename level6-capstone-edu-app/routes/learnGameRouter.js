const express = require("express");
const { isValidObjectId } = require("mongoose");
const learnGameRouter = express.Router();
const Flashcard = require("../models/flashcard.js");
const Question = require("../models/question.js");

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


//ADD A FLASHCARD
//*******************figure out way to limit this to ADMIN/TEACHER*******
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

//EDIT A FLASHCARD
learnGameRouter.put("/learn/:flashcardId", (req, res, next) => {
    Flashcard.findByIdAndUpdate(
        {_id: req.params.flashcardId, _user: req.user._id},
        req.body,
        { new: true },
        (err, flashcard) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(flashcard);
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

//GET ALL GAME QUESTIONS
learnGameRouter.get("/game", (req, res, next) => {
Question.find((err, questions) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(questions);
    });
});

//ADD A GAME QUESTION
learnGameRouter.post("/game", (req, res, next) => {
    req.body._user = req.user._id
    const question = new Question(req.body);

    question.save(function(err, newQuestion) {
        if (err) {
            res.status(500)
            return next(err)
        }
                 
        return res.status(201).send(newQuestion);
    })
})


//EDIT A GAME QUESTION
learnGameRouter.put("/game/:questionId", (req, res, next) => {
    Question.findByIdAndUpdate(
        {_id: req.params.questionId, _user: req.user._id},
        req.body,
        { new: true },
        (err, question) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(question);
        })
})


module.exports = learnGameRouter;