import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name}, age: {props.age}</p>
    </div>
  )
}

const App = () => {
  console.log("Hello from component")
  const now = new Date()
  const a = 10
  const b = 20
  const age = 10

  return (
    <div>
    <p>Hello World, it is {now.toString()}</p>
    <p>
      {a} plus {b} is {a + b}
    </p>
    <Hello name="Chelsia" age={26+10}></Hello>
    <Hello name="Karissa" age={age}></Hello>
  </div>
  )
}

ReactDOM.render(
 // <React.StrictMode>
    <App />,
 // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
