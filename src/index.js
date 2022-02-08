import React, { useContext} from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Clock from './Clock'
import Toggle from './Toggle'
import LoginControl, { Greeting, Mailbox, Page } from './LoginControl'
import RefactoredNumberList from './RefactoredNumberList'
import NameForm from './NameForm'
import InputRef from './InputRef'
import LoginContext, { LoginContextProvider } from './LoginContext'
import UserForm from './UserForm'
import Effect from './Effect'

const linkStyle = {
  display: 'inline-block',
  padding: '10px',
  margin: '5px',
  backgroundColor: '#DDD',
  borderRadius: '5px',
}

const AppWithProvider = () => (
  <LoginContextProvider>
    <App/>
  </LoginContextProvider>
)


const App = () => {

  const unreadMessages = ['React', 'Re: React', 'Re:Re: React', 'Hello!'];
  const numbers = [1, 2, 3, 4, 5];
  
  return(
    <BrowserRouter>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/login-control" style={linkStyle}>Login Control</Link>
      <Link to="/clock" style={linkStyle}>Clock</Link>
      <Link to="/toggle" style={linkStyle}>Toggle</Link>
      <Link to="/number-list" style={linkStyle}>Number List</Link>
      <Link to="/form" style={linkStyle}>Form</Link>
      <Link to="/page" style={linkStyle}>Page</Link>
      <Link to="/mailbox" style={linkStyle}>Mailbox</Link>
      <Link to="/input-ref" style={linkStyle}>Input Ref</Link>
      <Link to="/user-form" style={linkStyle}>User Form</Link>
      <Link to="/effect" style={linkStyle}>Effect</Link>

      <Switch>
        <Route path="/login-control" render={()=> <LoginControl />} />
        <Route path="/clock" render={()=> <Clock />} />
        <Route path="/toggle" render={()=> <Toggle />} />
        <Route path="/number-list" render={()=> <RefactoredNumberList numbers={numbers} />} />
        <Route path="/form" render={()=> <NameForm />} />
        <Route path="/page" render={()=> <Page />} />
        <Route path="/mailbox" render={()=> <Mailbox unreadMessages={unreadMessages} /> } />
        <Route path="/input-ref" render={()=> <InputRef /> } />
        <Route path="/user-form" render={()=> <UserForm /> } />
        <Route path="/effect" render={()=> <Effect /> } />

        <Route path="/" render={()=> <Greeting />} />
      </Switch>
    </BrowserRouter>  
 
  );
}

ReactDOM.render(<AppWithProvider />, document.getElementById("root"));

