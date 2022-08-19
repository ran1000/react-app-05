import './Die.css';
import React from "react";

export default function Die(props) {
  return (
    <div className='single-dice'>
      <h4>{props.value}</h4>
    </div>
  )
}
