import { useState } from 'react'
import Todo from './todo'  //import korlam

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <h1>Get started</h1>
          <Person></Person>
          <Gadgets></Gadgets>
          <Student name="Ariful Islam" ID="1000058175"></Student>
          <Student name= "Madeha Nower Pushon" ID="1000057573"></Student>
          <Todo task="Develop the app"></Todo>
          <Todo task="No social Media today" time="4 AM"></Todo>

    </>
  )
}

//components

function Person(){
  return <p> I am here</p>
}
function Gadgets(){
  return (
    <>
    <p> Mobile </p>
    <p>Laptop</p>
    <p>Ipad</p>
    
    </>
  )
}

function Student(props){  // here props is an object

  
  return (
    <div>
      <p >Name: {props.name}</p>
      <p>ID: {props.ID}</p>
    </div>
  )
}

// function add (num1, num2){
//   return num1+num2;
// }
export default App
