import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0]} numOfExercises={props.exercises[0]}></Part>
      <Part name={props.parts[1]} numOfExercises={props.exercises[1]}></Part>
      <Part name={props.parts[2]} numOfExercises={props.exercises[2]}></Part>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}></Content>
      <Total total={exercises1 + exercises2 + exercises3}></Total>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
