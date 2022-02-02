const express = require("express");
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

//Add new issue
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


//Edit issue
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
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


module.exports = issueRouter;