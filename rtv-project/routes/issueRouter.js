const express = require("express");
const { isValidObjectId } = require("mongoose");
const issueRouter = express.Router();
const Issue = require("../models/issue.js");
// const User = require("../models/user.js")


//GET ALL ISSUES
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(issues);
    });
});

//GET ISSUES by user id
issueRouter.get("/user", (req, res, next)=>{
    Issue.find({user: req._user}, (err, issues)=>{
        if(err) {
            res.status(500)
            return next(err)
        }
        console.log("issues", issues)
        return res.status(200).send(issues)
    })
})

//ADD NEW ISSUE for a specific user
// issueRouter.post("/user", (req, res, next) => {
//     // req.body.user = req._user
//     const issue._user = req.body.user
//     const issue = new Issue(req.body);
//     issue.save(function (err, newIssue) {
//         if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(201).send(newIssue);
//     })
// })

//ADD NEW ISSUE for a specific user
issueRouter.post("/user", (req, res, next) => {
    req.body._user = req.user._id
    const issue = new Issue(req.body);
    issue.save(function (err, newIssue) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newIssue);
    })
})

//GET ONE ISSUE
issueRouter.get("/:issueId", (req, res, next) => {
    Issue.findById(req.params.issueId, (err, issue) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!issue) {
            res.status(404)
            return next(new Error("No issue found."));
        }
        return res.send(issue);
    })
})


//EDIT ISSUE (or should it be findOneAndUpdate??)
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        {_id: req.params.issueId },
    // Todo.findByIdAndUpdate(
        // req.params.todoId,
        req.body,
        { new: true },
        (err, issue) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(issue);
        })
})

//DELETE ISSUE
//worked when took out=>>> user: req.user._id
// Todo.findByIdAndRemove(req.params.todoId,) 

issueRouter.delete("/user/:issueId", (req, res, next)=> {
    Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.user_id },
    (err, deletedIssue) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(`Successfully deleted: ${deletedIssue.title}`);
    })
})


//NOTE:  ****USER SHOULD ONLY BE ABLE TO UPVOTE/DOWNVOTE AN ISSUE ONCE****

//UPVOTE AN ISSUE-- individual user
// NOTE:  this route works, but receiving error:  Cast to ObjectId failed for value "{ _id: 'upvote', user: '61ec679e6a08cb02494b5734' }" (type Object) at path "_id" for model "Issue"
issueRouter.put("/user/upvote/:issueId", (req, res, next)=> {			
  Issue.findByIdAndUpdate(			
  {_id: req.params.issueId},			
  { $inc: {voteCount: 1}},			
  {new: true},			
  (err, updatedIssue)=> {			
      if(err){			
          res.status(500)			
          return next(err)			
      }			
      return res.status(201).send(updatedIssue)			
   }			
  )			
})			


//DOWNVOTE an Issue
//this route works also
issueRouter.put("/user/downvote/:issueId", (req, res, next)=> {			
  Issue.findByIdAndUpdate(			
  {_id: req.params.issueId},			
  { $inc: {voteCount: -1}},			
  {new: true},			
  (err, updatedIssue)=> {			
      if(err){			
          res.status(500)			
          return next(err)			
      }			
      return res.status(201).send(updatedIssue)		
   }			
  )			
})	

module.exports = issueRouter;