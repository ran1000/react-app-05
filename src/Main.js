import './Main.css';
import Die from "./Die"
import React from "react"

export default function Main() {
  const [dice, setDice] = React.useState(allNewDice());

  function randomDice(i) {
    return ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      key: i
    })
  }

  function allNewDice() {
    const randomDiceObj = [];
    for (let i = 0; i < 10; i++) {
      randomDiceObj[i] = randomDice(i)
    }
    return randomDiceObj
  }

  function setNewDices() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld === false ? randomDice(die.key) : die
    }))
  }

  function holdDice(key) {
    setDice(prevDice =>
      prevDice.map(die => {
        return die.key === key ? { ...die, isHeld: !die.isHeld } : die
      })
    )
  }

  const diceElements = dice.map(die => <Die
    isHeld={die.isHeld}
    value={die.value}
    key={die.key}
    toggleDie={() => holdDice(die.key)}
  />)

  return (
    <>
      <main>
        <h1 className='title'>Sameten</h1>
        <p>Roll until they are showing the same number. Click the square to freeze it at its current value between rolls.</p>
        <div className='dices-container'>
          {diceElements}
        </div>
        <button onClick={setNewDices} className='roll-button'>Roll</button>
      </main>
    </>
  )
}
