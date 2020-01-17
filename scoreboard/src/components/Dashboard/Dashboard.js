import React from "react";
import { Count } from "../Scores"
import Display from "../Display/Display";


const DashBoard = () => {

  const [strike, setStrike] = Count(),
        [ball, setBall]     = Count();
  
  if(strike === 3) {
    setStrike(0);
    setBall(0);
  }

  if(ball === 4){
    setStrike(0);
    setBall(0);
  }

  const foul = () => strike <= 2 ? setStrike(2) : strike;
  
  return (
    <div>
      <Display strike={strike} ball={ball} />

      <h3>DashBoard</h3>
      <div>
        <button onClick={() => setBall(ball+1)} test-id="ball-click">Ball</button>
        <button onClick={() => setBall(0) + setStrike(0)}>Hit</button>
      </div>
      <div>
        <button onClick={() => setStrike(strike+1)}>Strike</button>
        <button onClick={foul}>Foul</button>
      </div>
      



    </div>
  )
}

export default DashBoard