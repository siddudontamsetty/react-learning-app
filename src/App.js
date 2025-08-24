import React, { useContext } from "react";
import "./App.css";
import { createContext,userContext } from "react";

const myContext = createContext ();
function App() {
  return (
    <myContext.Provider value ="sidhartha">
      <UserName/>
    </myContext.Provider>
  );
}

const UserName =()=>{
  const user = useContext(myContext)
  return (<h1>username is {user}</h1>)
}


export default App;
