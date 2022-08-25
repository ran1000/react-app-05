import './Main.css';
import Die from "./Die"
import React from "react"
import Confetti from 'react-confetti'
import { nanoid } from "nanoid"

export default function Main() {
  const [dice, setDice] = React.useState(allNewDice());
  const [sameten, setSameten] = React.useState(false)
  const [rollsNumber, setRollsNumber] = React.useState(0);

  // In this case use Effect is not used for external effect,
  // but for keeping two internal states in sync.
  React.useEffect(function () {
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    if (allHeld && allSameValue) {
      console.log("You won!")
      setSameten(true)
    }
  }, [dice])

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
    setRollsNumber(prevRolls => prevRolls += 1);
    if (!sameten) {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld === false ? randomDice(die.key) : die
      }))
    } else {
      setDice(allNewDice())
      setSameten(false)
    }
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
      {sameten && <Confetti />}
      <main>
        <h1 className='title'>Sameten</h1>
        <p>Roll until they are showing the same number. Click the square to freeze it at its current value between rolls.</p>
        {sameten && <p className='rools'>You won with {rollsNumber} rools!</p>}
        <div className='dices-container'>
          {diceElements}
        </div>
        <button onClick={setNewDices} className='roll-button'>{sameten ? "Play Again" : "Roll"}</button>
      </main>
    </>
  )
}
