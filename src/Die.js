import './Die.css';
import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return (
    <div
      className='single-dice'
      style={styles}
      onClick={props.toggleDie}
    >
      <h4>{props.value}</h4>
    </div>
  )
}
