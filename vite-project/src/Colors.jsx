// import React, {useState} from "react";


// export default function Colors(){
//   const [backgroundColor, setBackgroundColor] = useState ("")

  
//   function handleChange(event){
//     const {value} = event.target
//     console.log("event.target.value", value)
//      setBackgroundColor(prevState =>([
//       ...prevState,
//       value
//      ]))
//   }


//   const colorList = backgroundColor.map((color, index) =>{
//    return(
//         <div key={index}>
//         <label>Color {index + 1}</label>
//         <p>{color}</p>
//          <input
//           type='color' 
//           onChange={(e)=>handleChange(e)}  
//           color={color}
//         />
//     </div>
//    )})


  
// return(
//     <div className="border">
//         <div>
//         {colorList}
//         </div>
        
//     </div>
// )
// }






//This works for changing color & hex value on screen
// import React, {useState} from "react";

// export default function Colors(){

//   const [backgroundColor, setBackgroundColor] = useState (null)


//   function handleChange(event){
//     console.log("event.target.value", event.target.value)
//     setBackgroundColor(event.target.value)
//   }

 
// return(
// <div>
//           <p>{backgroundColor}</p>
//           <input
//           type='color' 
//           color={backgroundColor}
//           onChange={(e)=>handleChange(e)}  
//         />

//     </div>
//    )
// }




//Eboni's original with changes now
// import React from "react";


// export default function Colors(props){
//   const [backgroundColor, setBackgroundColor] = React.useState("#FFFF00")

//   const gradient = []

//   // const colorList = backgroundColor.map((color, index) =>{
//   //   return(
//   //     <div key={index}>{color}</div>
//   //   )
//   // })
//   function handleChange(event){
//     console.log("event.target.value", event.target.value)
//     setBackgroundColor(event.target.value)
//     gradient.push(event.target.value)
//   }

  
// return(
  
//     <div className="border">
//       <div>
//         {console.log("gradient", gradient)}
//       {props.children}
//        <p>{backgroundColor}</p>
//         <input 
//           type='color'
//           onChange={handleChange}
//           name="backgroundColor"
//           value={backgroundColor}
//         />

//         </div>
        
//     </div>
// )
// }
  


// import React from "react";



// export default function Colors(props){
//   const [backgroundColor1, setBackgroundColor1] = React.useState("#FFFF00")
//   const [backgroundColor2, setBackgroundColor2] = React.useState("#FFFF00")

// //   const gradient = {color1: backgroundColor1, color2: backgroundColor2}

//   // const colorList = backgroundColor.map((color, index) =>{
//   //   return(
//   //     <div key={index}>{color}</div>
//   //   )
//   // })
//   function handleChange1(event){
//     console.log("event.target.value", event.target.value)
//     setBackgroundColor1(event.target.value)
//     setGradient(prevState=>([...prevState, event.target.value]))
//   }

//   function handleChange2(event){
//     console.log("event.target.value", event.target.value)
//     setBackgroundColor2(event.target.value)
//     // console.log("gradient", gradient)
//   }

  
// return(
  
//     <div className="border">
//       <div id="square" style={{ background: {backgroundColor1}, width: "50px", height: "50px"}}></div>
//        <label>Color 1</label>
//        <p>{backgroundColor1}</p>
//         <input 
//           type='color'
//           onChange={handleChange1}
//           name="backgroundColor1"
//           value={backgroundColor1}
//         />

//        <label>Color 2</label>
//        <p>{backgroundColor2}</p>
//         <input 
//           type='color'
//           onChange={handleChange2}
//           name="backgroundColor2"
//           value={backgroundColor2}
//         />

//         </div>
// )
// }
  


//original code:
// import React from "react";


// export default function Colors(props){
//   const [backgroundColor, setBackgroundColor] = React.useState (["#FFFF00", '#000000'])

//   // const colorList = backgroundColor.map((color, index) =>{
//   //   return(
//   //     <div key={index}>{color}</div>
//   //   )
//   // })
//   function handleChange(event){
//     const {name, value} = event.target

//     setBackgroundColor(prevState =>({
//       ...prevState,
//       [name]: value
//     }))
//   }

  
// return(
//     <div className="border">
//         <div>
       
//         <input 
//           type='color' 
//           onChange={handleChange}  
//           name="color"
//           value={"#FFFF00"}
//         />
//         {props.children}
//         </div>
        
//     </div>
// )
// }



import React from "react"
import Gradient from "./Gradient"


export default function Colors(){



  const [formData, setFormData] = React.useState(

    {color1: "", color2: "", angle: ""}
  )



  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }

    })

    console.log("formData", formData)
  }

  return(
    <div>

    <form>
          <label>Color 1</label>
          <p>{formData.color1}</p>
           <input 
              type="color"
              placeholder="color 1"
              onChange={handleChange}
              name="color1"
              value={formData.color1}
           />
          <label>Color 2</label>
          <p>{formData.color2}</p>
           <input 
              type="color"
              placeholder="color 2"
              onChange={handleChange}
              name="color2"
              value={formData.color2}
           />
          <label>Angle</label>
           <input 
              type="text"
              placeholder="angle"
              onChange={handleChange}
              name="angle"
              value={formData.angle}
           />

       

    </form>

    <Gradient
      formData={formData}
      handleChange={handleChange}
    />


   </div>

  )
}