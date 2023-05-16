import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import {useState} from 'react';


export function Header({listassign, setAssigns}) {

  const [textLength, setTextLength] = useState([]);

  const handleClick = (event:any) => {
    event.preventDefault();
    setTextLength(event.target.value);
  };

  function addAssign() {
    let newAssignment = document.getElementById('NewAssignment');
    let message = document.getElementById('message');
    message.innerText = "";
    for(let i=0;i<listassign.length; i++) {
      // Check to see if Assignment already exists
      if(listassign[i].assignment == newAssignment.value) {
        message.innerText = "Assignment\nAlready exists"
        return;
      }
    }

    let newArray= {assignment: newAssignment.value , status: 0};
    setAssigns(listassign => [...listassign, newArray])
    newAssignment.value = ""; // Empty input text
    setTextLength([]);  // reset control create button
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input onChange={handleClick} placeholder="Add a new assignment" type="text" id="NewAssignment"/>
        <button
          type="button" 
          disabled={textLength.length === 0}
          onClick={addAssign}
        >
          Create <AiOutlinePlusCircle size={20} />
          <div id="message"></div>
        </button>
      </form>
    </header>
  );
}
