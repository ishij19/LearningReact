import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter,setCounter]=  useState(15)

//let Counter=15
const addValue=()=>{
  console.log("clicked",Counter);
  //Counter=Counter+1
  if (Counter>=20) {
    setCounter(20)
  }
  else{
  setCounter(Counter+1)
  }
}

const removeValue=()=>{
  console.log("clicked",Counter);

  if (Counter<=0) {
    setCounter(0)
  }
  else{
  setCounter(Counter-1)
}
}

const resetValue=()=>{
  console.log("clicked",Counter);
  setCounter(0)
  }


  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {Counter}</h2>

      <button
      onClick={addValue}
      >Add value {Counter}</button>
      <br />
      <br/>
      <button
      onClick={removeValue}
      >remove value {Counter}</button>
      <br />
      <br/>
      <button
      onClick={resetValue}
      >reset value {Counter}</button>
      <p>footer: {Counter}</p>

    </>
  )
}

export default App
