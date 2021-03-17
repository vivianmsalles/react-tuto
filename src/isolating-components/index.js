import React from "react";

const fetchRandomFact = async (callback) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch("http://numbersapi.com/random");
  const body = await response.text();
  return body;
};

const RandomFact = () => {
  const [randomFact, setRandomFact] = React.useState(null);
  const [boolean, setBoolean] = React.useState(false);

  React.useEffect(() => {
    fetchRandomFact().then((body) => setRandomFact(body));
  }, [boolean]);

  console.log(boolean)

  if (!randomFact) return <div>Loading your random fact...</div>;
  return (
    <>
      <button onClick={() => setBoolean(!boolean)}>Change fact</button>
      <div>Hello, your random fact is: {randomFact}</div>;
    </>
  )
};

const IsolatingComponent = () => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <>
      <h1>Defining a component on the go</h1>
      <div
        style={{
          backgroundColor: hovered ? "#bbb" : "#ddd",
          padding: "20px",
          borderRadius: "10px",
          fontWeight: hovered ? "bold" : "normal",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <RandomFact />
      </div>
    </>
  );
};

export default IsolatingComponent;
