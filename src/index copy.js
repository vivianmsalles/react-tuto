import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Context from "./context/index";
import ExtractingComponent from "./extracting-component/index";
import IsolatingComponents from "./isolating-components/index";
import KeyProp from "./key-prop/index";
import UseEffect from "./use-effect/index";
import UseState from "./use-state/index";
// import UseRefUseCallback from "./useref-usecallback";

const linkStyle = {
  display: "inline-block",
  padding: "10px",
  margin: "5px",
  backgroundColor: "#ddd",
  borderRadius: "5px",
};

const courses = [
  { name: 'Extracting component', path: '/extracting-component', component: <ExtractingComponent /> },
  { name: 'useState()', path: '/use-state', component: <UseState /> },
  { name: 'useEffect()', path: '/use-effect', component: <UseEffect /> },
  { name: 'Isolating components', path: '/isolating-components', component: <IsolatingComponents /> },
  { name: 'key prop', path: '/key-prop', component: <KeyProp /> },
  { name: 'Context', path: '/context', component: <Context /> },
  // { name: 'Memo() and UseCallBack()', path: '/memo-and-use-callback', component: <MemoAndUseCallback /> },
  // { name: 'useRef() and useCallback()', path: '/useref-and-usecallback', component: <UseRefUseCallback /> },
]

const Links = () => courses.map(({ name, path }) => <Link key={name} style={linkStyle} to={path}>{name}</Link>)
const Routes = () => courses.map(({ path, component }) => <Route key={path} path={path}> {component} </Route>)

const App = () => (
  <Router>
    <Links />
    <Switch>
      <Routes />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

// const courses = [
//   { name: 'Extracting component', path: '/extracting-component', component: <ExtractingComponent /> },
//   { name: 'useState()', path: '/use-state', component: <UseState /> },
//   { name: 'useEffect()', path: '/use-effect', component: <UseEffect /> },
//   { name: 'Isolating components', path: '/isolating-components', component: <IsolatingComponents /> },
//   { name: 'key prop', path: '/key-prop', component: <KeyProp /> },
//   { name: 'Context', path: '/context', component: <Context /> },
//   // { name: 'Memo() and UseCallBack()', path: '/memo-and-use-callback', component: <MemoAndUseCallback /> },
//   // { name: 'useRef() and useCallback()', path: '/useref-and-usecallback', component: <UseRefUseCallback /> },
// ]
// const App = () => (
//   <Router>
//     <nav>
//       { courses.map(({ name, path }) => <Link key={name} style={linkStyle} to={path}>{name}</Link>) }
//     </nav>
//     <Switch>
//       { courses.map(({path, component}) => <Route key={path} path={path}> {component} </Route>) }
//     </Switch>
//   </Router>
// );

// ReactDOM.render(<App />, document.getElementById("root"));
