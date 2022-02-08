import React, { useState, useEffect } from 'react';

const Effect = () => {
  const [ timerNumber, setTimerNumber] = useState()
  const [date1, setDate1] = useState()
  const [date2, setDate2] = useState()

  useEffect(() => {

    let interval 
    if (timerNumber === 1)  interval = setInterval(() => setDate1(new Date()), 10000);
    if (timerNumber === 2)  interval = setInterval(() => setDate2(new Date()), 1000);
    console.log('test 1')

    return () => {
      if (timerNumber === 1) setDate1(null)
      if (timerNumber === 2) setDate2(null)
      clearInterval(interval);
      console.log('test 2')
    }  
  });

  return (
    <div>
    
      <h2> { date1 ? `It is Date 1: ${date1.toLocaleTimeString()}` : 'Timer desactivated'}</h2>
      <h2> { date2 ? `It is Date 2: ${date2.toLocaleTimeString()}` : 'Timer desactivated'}</h2>
      <button onClick={() => setTimerNumber(1)}>
        Set Timer 1
      </button>
      <button onClick={() => setTimerNumber(2)}>
        Set Timer 2
      </button>
    </div>
  );
}

export default Effect