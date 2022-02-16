const express = require("express");
const { isValidObjectId } = require("mongoose");
const issueRouter = express.Router();
const Issue = require("../models/issue.js");


//Get all issues
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(issues);
    });
});

//Get issues by user id
issueRouter.get("/user", (req, res, next)=>{
    Issue.find({user: req.user._id}, (err, issues)=>{
        if(err) {
            res.status(500)
            return next(err)
        }
        console.log("issues", issues)
        return res.status(200).send(issues)
    })
})

// //Add new issue for a specific user
issueRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const issue = new Issue(req.body);
    issue.save(function (err, newIssue) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newIssue);
    })
})

//Add new issue-- attempting diff approach with $push
// issueRouter.post("/", (req, res, next) => {
//     req.body.user = req.user._id
//     console.log(req.user._id)
//     const issue = new Issue(req.body);

//     issue.insertOne([
//         {$push: {users: req.user._id}}
//     ],
//     (err, newIssue) => {
//         if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(201).send(newIssue);
// }
//     )
// })


//Get one issue
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


//Edit issue (or should it be findOneAndUpdate)
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        {_id: req.params.issueId, user: req.user._id},
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

//Delete issue
// Todo.findByIdAndRemove(req.params.todoId,) 

issueRouter.delete("/:issueId", (req, res, next)=> {
    Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.user._id },
    (err, deletedIssue) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(`Successfully deleted: ${deletedIssue.title}`);
    })
})


//NOTE:  ****USER SHOULD ONLY BE ABLE TO UPVOTE/DOWNVOTE AN ISSUE ONCE****

//UPVOTE an Issue -- individual user
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
issueRouter.put("/downvote/:issueId", (req, res, next)=> {			
  Issue.findOneAndUpdate(			
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