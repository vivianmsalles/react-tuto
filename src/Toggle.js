import React, { useState } from 'react'

const Toggle = () => {
    const [isToggleOn, setIsToggleOn] = useState('false');

    console.log('Hi')

    return(
        <button onClick={(e) => setIsToggleOn(!isToggleOn)}>
            { isToggleOn ? 'ON' : 'OFF' }
        </button>
    );
}

export default Toggle

// <Clock show={this.state.isToggleOn} />