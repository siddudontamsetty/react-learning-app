import React, { useContext } from "react";
import "./App.css";
import { createContext,userContext } from "react";

const myContext = createContext ();
function App() {
  const data ={
    name : "siddu" ,
    age :21 ,
    gender :"male"
  }
  return (
    <myContext.Provider value = {data}>
      <UserData/>
    </myContext.Provider>
  );
}

const UserData=()=>{
  const {name , age , gender} = useContext(myContext)
  return ( <div>personal info is
    <h1>name : {name}</h1>
    <h1>age :{age}</h1>
    <h1>gender:{gender}</h1>
  </div>)
}



export default App;
