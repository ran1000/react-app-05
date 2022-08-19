import './Main.css';
import Die from "./Die"
import React from "react"

export default function Main() {
  function allNewDice() {
    const randomNum = [];
    for (let i = 0; i < 10; i++) {
      const num = Math.random() * 6;
      randomNum.push(Math.ceil(num));
    }
    return randomNum
  }

  console.log(allNewDice())

  return (
    <>
      <main>
        <h1 className='title'>Tengame</h1>
        <div className='dices-container'>
          <Die value={1} />
        </div>
      </main>
    </>
  )
}
