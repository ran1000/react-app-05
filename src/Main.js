import './Main.css';
import Die from "./Die"
import React from "react"

export default function Main() {
  return (
    <>
      <main>
        <h1 className='title'>Tengame</h1>
        <div className='dices-container'>
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={3} />
          <Die value={3} />
          <Die value={3} />
        </div>
      </main>
    </>
  )
}
