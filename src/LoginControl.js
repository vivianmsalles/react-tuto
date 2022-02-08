import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import LoginContext from './LoginContext'


//Element Variables

const LoginControl = () =>  {
    const { loggedIn, setLoggedIn } = useContext(LoginContext)

    const handleLogin = () => {
        setLoggedIn(!loggedIn)
        history.push('/')
    }

    const history = useHistory()
    const LoginButton = () => 
        //<button onClick={()=>{ window.location.pathname = '/clock' }}>{loggedIn ? 'Logout' : 'Login'}</button> // == link_to on rails; it does not save the state
        // it keeps the state :
         <button onClick={handleLogin}>{loggedIn ? 'Logout' : 'Login'}</button> 
        // <button onClick={()=>setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button> 

    return  <LoginButton />
}

export const Greeting = () => {
    const { loggedIn } = useContext(LoginContext)
    return loggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>
}
// Inline If with Logical && Operator

export function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
   
    return (
        <div>

            <h1>Hello!</h1>
            {unreadMessages.length > 0 && 
                <h2>You have {unreadMessages.length} unread messages.</h2>
            }
        </div>
    );
}

// Preventing Component from Rendering

const WarningBanner = ( { warn }) =>
    warn ? <div className="warning">Warning!</div> : <></>

export const Page = () => {
   const [showWarning, setShowWarning] = useState(true);
    
    return(
        <div>
            <WarningBanner warn={showWarning} />
            <button onClick={()=> setShowWarning(!showWarning)}>
                {showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
    );
    
}

export default LoginControl
