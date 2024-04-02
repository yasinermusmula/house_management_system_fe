import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./layout/LoginPage";
import SignUp from "./layout/SignUp";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route>
            <LoginPage path="/login"/>
        </Route>
        <Route>
            <SignUp path="/signup" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
