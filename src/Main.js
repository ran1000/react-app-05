import './Main.css';
import Die from "./Die"
import React from "react"

export default function Main() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const randomDiceObj = [];
    for (let i = 0; i < 10; i++) {
      randomDiceObj[i] = ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        key: i
      });
    }
    return randomDiceObj
  }

  function setNewDices() {
    setDice(allNewDice())
  }

  const diceElements = dice.map(die => <Die
    isHeld={die.isHeld}
    value={die.value}
    key={die.key}
  />)

  return (
    <>
      <main>
        <h1 className='title'>Tengame</h1>
        <div className='dices-container'>
          {diceElements}
        </div>
        <button onClick={setNewDices} className='roll-button'>Roll</button>
      </main>
    </>
  )
}
