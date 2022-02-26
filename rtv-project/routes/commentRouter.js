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