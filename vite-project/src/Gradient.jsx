import React from "react"
// import styled from "styled-components";


export default function Gradient(props){

//           const TestBox = styled.div`
//             width: 50px;
//             height: 50px;
//             background: linear-gradient: (${props=>props.formData.angle}deg, ${props.formData.color1}, ${props.formData.color2});
// `;

const style = {
    width: "50px",
    height: "50px",
    background: `linear-gradient(${props.formData.angle}deg, ${props.formData.color1}, ${props.formData.color2})`
}



    return(
        <div>
            <div style={style}></div>

          
          
            {/* <div style={{width: "50px", height: "50px", background: `linear-gradient(${props.formData.angle}deg, ${props.formData.color1}, ${props.formData.color2})`}}> */}

            {/* </div> */}

            <textarea
              name="formData"
              onChange={props.heightandleChange}
              value={props.formData.color1}
           />

           <textarea
              name="formData"
              onChange={props.handleChange}
              value={props.formData.color2}
           />

            <textarea
              name="formData"
              onChange={props.handleChange}
              value={props.formData.angle}
           />


        </div>
    )


}