import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
