import React, { useState, useEffect } from "react";
import '../App.css';

const fetchRandomFact = async (callback) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch("http://numbersapi.com/random");
  const body = await response.text();
  return body;
};
let integer = 0

const DummyUseEffect = () => {
  const RandomFact = () => {
    const [randomFact, setRandomFact] = React.useState(null);

    React.useEffect(() => {
      fetchRandomFact().then((body) => setRandomFact(body));
    }, []);

    if (!randomFact) return <div>Loading your random fact...</div>;
    return <div>Hello, your random fact is: {randomFact}</div>;
  };

  return (
    <div className="App">
      <header className="App-header">
        <RandomFact />
      </header>
    </div>
  );
}

export default DummyUseEffect;
