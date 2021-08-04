import React from "react"
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { ApplicationViews } from "./ApplicationViews";

function App() {
  return (
    <>
      <Route render={() => {
        if (localStorage.getItem("lu_token")) {
          return <>
            <Route render={NavBar} />
            <Route render={ApplicationViews} />
          </>
        
      } else {
          return <Redirect to="/login" />
      }
      }} />
      <Route path="/login" render={Login} />
      <Route path="/register" render={Register} />
    </>
  );
}

export default App;
