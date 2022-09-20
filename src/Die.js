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
          <div className="first-face">
            <span className="dot" ></span>
          </div>
        )
      case 2:
        return (
          <div className="second-face">
            <span className="dot" ></span>
            <span className="dot" ></span>
          </div>
        )
      case 3:
        return (
          <div className="third-face">
            <span className="dot" ></span>
            <span className="dot" ></span>
            <span className="dot" ></span>
          </div>
        )
      case 4:
        return (
          <div className='fourth-face'>
            <div className='column'>
              <span className="dot" ></span>
              <span className="dot" ></span>
            </div>
            <div className='column'>
              <span className="dot" ></span>
              <span className="dot" ></span>
            </div>
          </div >
        )
      case 5:
        return (
          <div className='fifth-face'>
            <div className='column'>
              <div className="dot" ></div>
              <div className="dot" ></div>
            </div>
            <div className='column'>
              <div className="dot" ></div>
            </div>
            <div className='column'>
              <div className="dot" ></div>
              <div className="dot" ></div>
            </div>
          </div>
        )
      case 6:
        return (
          <div className='fourth-face'>
            <div className='column'>
              <span className="dot" ></span>
              <span className="dot" ></span>
              <span className="dot" ></span>
            </div>
            <div className='column'>
              <span className="dot" ></span>
              <span className="dot" ></span>
              <span className="dot" ></span>
            </div>
          </div >
        )
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
