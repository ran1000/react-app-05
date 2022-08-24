import './Die.css';
import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  // function dieFace() {
  //   switch (props.value) {
  //     case value:

  //       break;

  //     default:
  //       break;
  //   }
  // }
  function dieFace(value) {
    switch (value) {
      case 1:
        return (
          <div className="dot" ></div>
        )
        break;
      case 2:
        return (
          <>
            <div className="dot" ></div>
            <div className="dot" ></div>
          </>
        )
        break;
      case 3:
        return (
          <>
            <div className="dot" ></div>
            <div className="dot" ></div>
            <div className="dot" ></div>
          </>
        )
        break;
      case 4:
        return (
          <>
            <div className="dot" ></div>
            <div className="dot" ></div>
            <div className="dot" ></div>
            <div className="dot" ></div>
          </>
        )
        break;
      case 5:
        return (
          <>
            <div className="dot" ></div>
            <div className="dot" ></div>
            <div className="dot" ></div>
            <div className="dot" ></div>
            <div className="dot" ></div>
          </>
        )
        break;
      case 6:
        return (
          <>
            <div className="dot" ></div>
            <div className="dot" ></div>
            <div className="dot" ></div>
            <div className="dot" ></div>
            <div className="dot" ></div>
            <div className="dot" ></div>
          </>
        )
        break;

      default:
        break;
    }
  }

  return (
    <div
      className='single-dice'
      style={styles}
      onClick={props.toggleDie}
    >
      {dieFace(props.value)}
    </div>
  )
}
