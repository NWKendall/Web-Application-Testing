import React from "react";

const Display = (props) => {

  return (
    <div>
      <h2>ScoreBoard</h2>
      <h3>Strikes: {props.strike}</h3>
      <h3>Balls: {props.ball}</h3>
    </div>
  )
}

export default Display