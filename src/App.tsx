import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import React, {useState} from "react";
//import { listassign } from "./data";
interface assign {
  assignment:string;
  status:number;
};
function App() {

  const [listassign, setAssigns] = useState([]);


  let listassigns: assign[] =  [
    {assignment:"Assignment 1", status: 0}
    , {assignment:"Assignment 2", status:0}
  ];
  /*
  setAssigns(assigns.concat(listassign));
  console.log("ini");
  console.log(listassign);
  */
  return (
    <>
      <Header listassign={listassign} setAssigns={setAssigns}/>
      <Assignments listassign={listassign} setAssigns={setAssigns} />
    </>
  );
}

export default App;
