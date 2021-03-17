import React, { useState } from "react"
import logo from '../logo.svg';
import '../App.css';

const Home = (props) => {
  const { show } = props
  if (!show)
    return <></>

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p> Edit <code>src/App.js</code> and save to reload. </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
    </>
  );
}

const exemple = () => {
 return [1,2]
}
const UseState = () => {
  const [show, setShow] = useState(false)
  const [firstValue, secondValue] = exemple()

  console.log(firstValue, secondValue)

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show Animation</button>
      <header className="App-header">
        <Home show={show} />
      </header>
    </div>
  );
}

export default UseState;


// const Home = () => {
//   return (
//     <>
//       <img src={logo} className="App-logo" alt="logo" />
//       <p> Edit <code>src/App.js</code> and save to reload. </p>
//       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
//     </>
//   );
// }


// const UseState = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Home />
//       </header>
//     </div>
//   );
// }
