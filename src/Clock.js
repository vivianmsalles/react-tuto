import React, { useEffect, useState } from 'react'

const Clock = () => {

    const [date, setDate] = useState(new Date());



    useEffect(() => {
      const interval = setInterval(() => setDate(new Date()), 1000);

      //componentDidMount > UseEffect, with []
      //componentDidUpdate > useEffect, with [something here]
      //componentWillUnmount > useEffect with return statement

      return () => {
        clearInterval(interval);
        // This return will only run when the component is unmounted
      }
    }, []);
    console.log('text')
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  export default Clock
  


    // OBS:
    // State is called local or encapsulated because it is not accessible to any
    //component other that the one that owns and sets it. 
    // A component can pass its state down to a child as a props:
  
    // <Component date={this.state.date} />
    // > Top-down or unidirectional data flow > state can only affect child components.
  
  
  
    // Questions : 
  
    // State Updates may be Asynchronous
  
    // setState() takes as parameter either an object, or a function, but 
    //functions avoid errors when there is an asynchronous update:
  
      //this.setState((prevState, props) => ({
        // counter: prevState.counter + props.increment      
      //}});