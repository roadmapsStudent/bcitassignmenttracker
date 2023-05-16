import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import React, {useState} from "react";
import { startAssign } from "./data";


function App() {

  const [listassign, setAssigns] = useState([]);
  const [start, setStart]= useState(1);


  if(start == 1) { // if first time running page load assignments
    for(let i=0; i<startAssign.length; i++) {
      setAssigns(listassign => [...listassign, startAssign[i]]);
    }
    setStart(0);  // used to load only once at the beginning
  }
  
  return (
    <>
      <Header listassign={listassign} setAssigns={setAssigns}/>
      <Assignments listassign={listassign} setAssigns={setAssigns} />
    </>
  );
}

export default App;
