import React from "react"
import DiceBox from "./DiceBox"
import Die from "./Die"


function App() {
  return (
    <div>
      <DiceBox />

      {/* EXTRA CREDIT */}
      {/* 1.  Create a <Die /> component that receives a random number as a prop and displays 
      it (rather than just displaying the 5 numbers in the <DiceBox /> JSX). */}

      {/* 2.  NEED to allow player to select a die and keep that value until all die are re-set;
      "Allow the user to click on a given <Die /> to select it, and that number will not change until 
      the dice reset (resetting is done in the next step)." */}

      {/* 3.  FOR Die components below need to reset all dice after every third roll ("Have the dice reset 
      (de-selecting all previously selected die and setting their numbers back to 0) after every 3rd roll."*/}

      <Die />
      <Die />
      <Die />
      <Die />
      <Die />
    </div>
  );
}

export default App;



