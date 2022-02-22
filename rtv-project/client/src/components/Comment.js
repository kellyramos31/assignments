// import React, { useState } from 'react'
// import CommentForm from './CommentForm.js'
// // import { UserContext } from "../context/UserProvider.js"
// // import { IssueCommentContext } from "../context/IssueCommentProvider.js"

// // const initInputs = { username: "", password: ""}

// export default function Comment(){

//   const [toggle, setToggle] = useState(false)

//   function toggleForm(){
//     setToggle(prev => !prev)
//   }

//   return (
//     <div className="comment-form-container">
//       { !toggle ?
//       <>
//          <button onClick={toggleForm}>Leave A Comment</button>
//         </>
//         :
//         <>
//           <CommentForm />
//           <button onClick={toggleForm}></button>
//         </>
//       }
//     </div>
//   )
// }