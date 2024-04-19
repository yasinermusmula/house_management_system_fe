import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./layout/LoginPage";
import SignUp from "./layout/SignUp";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userVerify} from "./store/actions/UserActions";
import PropertyPage from "./layout/PropertyPage";

function App() {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     if (localStorage.getItem("token")){
    //         dispatch(userVerify())
    //     }
    // }, []);
    const userMailData = useSelector(store=> store.user)
    console.log(userMailData.user.email)
    const email = userMailData.user.email

    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         if (userMailData && userMailData.user && userMailData.user.email) {
    //             const email = userMailData.user.email;
    //             dispatch(userVerify(email));
    //             console.log(email);
    //         } else {
    //             console.error("User email data is not available.");
    //         }
    //     }
    // }, [dispatch, userMailData]);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/login">
            <LoginPage/>
        </Route>
        <Route path="/signup">
            <SignUp />
        </Route>
        <Route path="/property">
            <PropertyPage/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
