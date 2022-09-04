// import React from 'react';
// import './App.css';
// import Colors from './Colors';

// export default function App() {
 
// return(
//     <div>
//       <header className='header'>CSS GRADIENT GENERATOR</header>
//       <div class="container">
       
//         <div class='box'>
//           <div className='options'>
          
//         <Colors/>
         
//         <br>
//         </br>
//          Angle <input className='number'
//           type='number'/>

//           </div>
//         </div>
//         <p className='text'></p>
//       </div>
//     </div> 
//   )}



//eboni's original code
// import React from 'react';
// import './App.css';
// import Colors from './Colors';

// export default function App() {
 
// return(
//     <div>
//       <header className='header'>CSS GRADIENT GENERATOR</header>
//       <div class="container">
       
//         <div class='box'>
//           <div className='options'>

//             <Colors/>
          
//           {/* <Colors>
//             <label>Color 1</label>
//           </Colors>

//            <Colors>
//             <label>Color 2</label>
//           </Colors> */}

//         <br>
//         </br>
//          Angle <input className='number'
//           type='number'/>

//           </div>
//         </div>
//         <p className='text'></p>
//       </div>
//     </div> 
//   );
// }


//original code
// import React from 'react';
// import './App.css';
// import Colors from './Colors';

// export default function App() {
 
// return(
//     <div>
//       <header className='header'>CSS GRADIENT GENERATOR</header>
//       <div class="container">
       
//         <div class='box'>
//           <div className='options'>
          
//           {/* {/* <Colors>
//           <label>Color 1</label>
//           </Colors> */}
         
//           <Colors>
//           <label>Color 2</label>
//           </Colors> */

//         <br>
//         </br>
//          Angle <input className='number'
//           type='number'/>

//           </div>
//         </div>
//         <p className='text'></p>
//       </div>
//     </div> 
//   );
// }



//try with lifting state up to App component
import React from 'react';
import './App.css';
import Colors from './Colors';

export default function App() {
 
return(
    <div>
      <header className='header'>CSS GRADIENT GENERATOR</header>
      <div class="container">
       
        <div class='box'>
          <div className='options'>
          
          {/* {/* <Colors>
          <label>Color 1</label>
          </Colors> */}
         
          <Colors/>

          <div className="blueBorder square"></div>

        <br>
        </br>
         {/* Angle <input className='number'
          type='number'/> */}

          </div>
        </div>
        <p className='text'></p>
      </div>
    </div> 
  );
}