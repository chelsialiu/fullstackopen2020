import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Hello = ({ name,age }) => {
  // Destructure values from objects and arrays upon assignment
  // const name = props.name
  // const age = props.age
  
  // Rewriting and destructuring
  // const { name, age } = props

  // Component helper function
  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear()
  //   return yearNow - props.age
  // }

  // Rewriting function as arrow function
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  // counter is assigned the initial value of state (0)
  // setCounter is assigned to a function that will be use dto modify the state
  const [ counter, setCounter ] = useState(0) // initializes with value of 0, returns an array with two items: counter and setCounter
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  // console.log("rendering...", counter)

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <div>{counter}</div>
    </div>
  )
}

export default App;
