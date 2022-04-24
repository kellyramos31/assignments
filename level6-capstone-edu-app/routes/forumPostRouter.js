const express = require("express");
const { isValidObjectId } = require("mongoose");
const forumPostRouter = express.Router();
const Post = require("../models/post.js");
const Comment = require("../models/comment.js");



//NOTE:  ISSUES SHOULD BE ORDERED BY UPVOTES/DOWNVOTES -- NEED TO ADD THIS IN (maybe $sort method)
//NOTE:  ****USERS SHOULD ONLY BE ABLE TO UPVOTE/DOWNVOTE AN ISSUE ONCE****NEED TO ADD IN

//GET ALL ISSUES (Sorted in descending voteCount order) -- use for Public Page
// issueRouter.get("/", (req, res, next) => {
//     //  Issue.find({}).populate("_comments.commentText")
//      Issue.aggregate([
//       { $sort: { voteCount: -1 } }
//       ],
//        //code below gets at username, but also creates separate array
       
//         // {$unwind: "$commentText"}
//          (err, sortedUserIssues)=> {
//             if (err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(sortedUserIssues)
//     })
// });


//GET ALL ISSUES ALTERNATIVE including populate _comments AND SORT BY # OF COMMENTS ON POST
forumPostRouter.get("/", (req, res, next) => {
Post.find({}) 
    .populate("_comments")
    .sort({ numberCommentsOnPost: -1 })
    .exec((err, posts)=> {

        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(posts);
})
})


//TRYING TO SORT _COMMENTS ARRAY FOR SPECIFIC ISSUE

// issueRouter.get("/sort/:issueId", (req, res, next) => {
//     issueId = req.params.issueId
//     Issue.find(
//         {$match: {_id: 1}},
//         {$unwind: "$_comments"},
//         {$sort: {upVotesComments: -1}}
//     ),
//     (err, issues)=> {
//             if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(201).send(issues);
// }})




//GET POST FOR INDIVIDUAL USER -- NOTE:  this sorts the post, but doesn't give user specific post now.

forumPostRouter.get("/user", (req, res, next)=>{
    // const filter = { _user: req.body._user} //pretty sure problem = this line here
    //const ObjectId = require('mongoose').Types.ObjectId
    const ObjectId = require('mongodb').ObjectId            //problem with matching the ID(this solution is from Stack Overflow)   
    Post.aggregate([
       { $match: { _user: new ObjectId(req.user._id) } },  //problem with matching the ID(this solution is from Stack Overflow)
    //    { $sort: { upVotes: -1 } },
       { $lookup: 
        { from: "comments",
          localField: "_comments",
          foreignField: "_id",
          as: "userComments"
        }}
    ],
         (err, sortedUserPosts)=> {
            if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(sortedUserPosts)
    })
})

//GET ALL ISSUES FOR INDIVIDUAL USER == THIS ONE WORKS, BUT DOES NOT SORT
// issueRouter.get("/user", (req, res, next)=>{
//     Issue.find({_user: req.user._id}, (err, issues)=>{
//         if(err) {
//             res.status(500)
//             return next(err)
//         }
//         console.log("issues", issues)
//         return res.status(200).send(issues)
//     }).populate({
//         path: "_comments"
//     })
// })
        
//ADD NEW FORUM POST
forumPostRouter.post("/", (req, res, next) => {
    req.body._user = req.user._id
    const post = new Post(req.body);
    post.save(function (err, newPost) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newPost);
    })
})


//GET ONE POST
forumPostRouter.get("/:postId", (req, res, next) => {
    Post.findById(req.params.postId, (err, post) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!post) {
            res.status(404)
            return next(new Error("No post found."));
        }
        return res.send(post);
    })
})


//EDIT FORUM POST
forumPostRouter.put("/:postId", (req, res, next) => {
    Post.findByIdAndUpdate(
        {_id: req.params.postId, _user: req.user._id  },
        req.body,
        { new: true },
        (err, post) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(post);
        })
})

//DELETE ISSUE--this works but leaves comments with no issue
// issueRouter.delete("/:issueId", (req, res, next)=> {
//     Issue.findOneAndDelete(
//     { _id: req.params.issueId, _user: req.user._id },
//     (err, deletedIssue) => {
//         if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(200).send(`Successfully deleted: ${deletedIssue.title}`);
//     })
// })

//DELETE ISSUE--this works but leaves comments with no issue
// issueRouter.delete("/:issueId", (req, res, next)=> {
//     Issue.findByIdAndDelete(
//     { _id: req.params.issueId, _user: req.user._id },
//     (err, deletedIssue) => {
//         if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(200).send(`Successfully deleted: ${deletedIssue.title}`);
//     })
// })

// const Parent  = require("./parent"); 

// router.delete('/delete/instance' , async (req,res) => {
//   await Parent.updateOne({ childrens: '612cd0d8f9553c9f243db691' }, { $pull: { childrens: '612cd0d8f9553c9f243db691' }})
//   const deletedInstance = await Children.findOneAndDelete({ _id: '612cd0d8f9553c9f243db691'})
//   res.json(deletedInstance)
// })

//DELETE A FORUM POST
forumPostRouter.delete("/:postId", (req, res, next)=> {
    Post.findByIdAndDelete(
    { _id: req.params.postId, _user: req.user._id },
    (err, deletedPost) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(`Successfully deleted: ${deletedPost.title}`);
    })
})


//DELETE all comments associated with Issue
// issueRouter.delete("/:issueId", (req, res, next)=> {
//     Issue.findById(
//     { _issue: req.params.issueId, _user: req.user._id })=>{

//     { $pull: {_comments: req.body._id}},
//     (err, deletedComment) => {
//         if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(200).send(`Successfully deleted: ${deletedComment.commentText}`);
//     })
// })

//stack overflow suggestion:
// delete: function(req, res) {
//    return Project.findById(req.params.id, function(err, project){
//          return project.remove(function(err){
//              if(!err) {
//                  Assignment.update({_id: {$in: project.assingments}}, 
//                       {$pull: {project: project._id}}, 
//                            function (err, numberAffected) {
//                             console.log(numberAffected);
//                       } else {
//                         console.log(err);                                      
//                     }
//                   });
//             });
//         });
// }





//DELETE specified comment from _comment array
forumPostRouter.put("/deleteCommentFromIssue/:postId", (req, res, next)=> {
        const commentId = req.body._id
        // const ObjectId = require('mongodb').ObjectId 
        Post.findByIdAndUpdate(
            {_id: req.params.postId, _user: req.user._id},
            { $pull: { "_comments": commentId}},
        (err, updatedPost) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(updatedPost);
            //note:  appears to pull the commentId from the array in issues, but "updatedIssue res still shows comment id"  
        })
    })

   




//NOTE:  ****USER SHOULD ONLY BE ABLE TO UPVOTE/DOWNVOTE AN ISSUE ONCE****NEED TO FIGURE THIS OUT

//UPVOTE AN ISSUE--INCREMENT -- this one works to increment vote count --but can vote as many times as want to...
// forumPostRouter.put("/upvote/:postId", (req, res, next)=> {			
//   Post.findByIdAndUpdate(			
//   {_id: req.params.postId, _user: req.user._id },	
//   { $inc: {upVotes: 1, totalVotersVotedCount: 1} },			
//   {new: true},			
//   (err, updatedPost)=> {			
//       if(err){			
//           res.status(500)			
//           return next(err)			
//       }			
//       return res.status(201).send(updatedPost)			
//    }			
//   )			
// })

//VOTE ON AN ISSUE (adds to _voters array but only ONCE) -- NOTE:  seems to ??MAYBE?? work NOW -- BUT...how implement with rest on front-end??
// forumPostRouter.put("/voter/vote/:postId", (req, res, next)=> {		

// Post.updateOne(
//     {_id: req.params.postId}, 
//     { $addToSet: { _voters: req.user._id } },


// (err, posts)=> {
//     if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(201).send(posts);
// })
// })
		


//DOWNVOTE AN ISSUE--DECREMENT this works to decrement vote count === but can downVote as many times as want
// forumPostRouter.put("/downvote/:postId", (req, res, next)=> {			
//   Post.findByIdAndUpdate(			
//   {_id: req.params.postId, _user: req.user._id },		//maybe don't need _user: req.user._id here??
//   { $inc: {downVotes: 1, totalVotersVotedCount: 1} },			
//   {new: true},			
//   (err, updatedPost)=> {			
//       if(err){			
//           res.status(500)			
//           return next(err)			
//       }			
//       return res.status(201).send(updatedPost)		
//    }			
//   )			
// })	


//MAYBE THIS IS JUST CANCEL A VOTE -- (removes from _voters array)
//NOTES:  maybe use $pull (or is there an opposite to $addToSet??)
// issueRouter.put("/voter/cancelvote/:issueId", (req, res, next)=> {		

// Issue.updateOne(
//     {_id: req.params.issueId}, 
//     { $pull: { _voters: req.user._id} },


// (err, issues)=> {
//     if (err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(201).send(issues);
// })
// })


// policies.aggregate([
//     { "$project": {
//        "count": { "$size": "$exploits" }
//     }}
// ],function(err,doc) {

// });

//INCREMENT TOTAL # OF COMMENTS ON POST
forumPostRouter.put("/increment/:postId", (req, res, next) => {
    req.body._user = req.user._id
 
    const postId = req.params.postId
      
        Post.findByIdAndUpdate(
            {_id: postId, _user: req.user._id},
            { $inc: { numberCommentsOnIssue: 1}},
            { new: true},
        (err, updatedPost) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(updatedPost)
        })
})

//DECREMENT TOTAL # OF COMMENTS ON POST
forumPostRouter.put("/decrement/:postId", (req, res, next) => {
    req.body._user = req.user._id
 
    const postId = req.params.postId
      
        Post.findByIdAndUpdate(
            {_id: postId, _user: req.user._id},
            { $inc: { numberCommentsOnIssue: -1}},
            { new: true},
        (err, updatedPost) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(updatedPost)
        })
})

//TOTAL # OF COMMENTS FOR SPECIFIC POST
forumPostRouter.get("/countComments/:postId", (req, res, next)=> {
   Post.aggregate([
        // {$match: {_id: req.params.issueId}},
        {"$project": {
            "count": { "$size": "_comments"}
        }}
    ]), 
        (err, commentCount)=> {
            if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(commentCount)
    }

})


module.exports = forumPostRouter;