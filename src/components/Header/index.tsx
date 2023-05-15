import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import {useState} from 'react';



export function Header({listassign, setAssigns}) {

  const [newAssign, setNewAssign] = useState([]);

  const handleClick = (event:any) => {
    event.preventDefault();
    setNewAssign(event.target.value);
  };

  function addAssign() {

    let newA = {assignment: document.getElementById('NewAssignment').value, status: 0};
    setAssigns(listassign => [...listassign, newA])
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input onChange={handleClick} placeholder="Add a new assignment" type="text" id="NewAssignment"/>
        <button
          type="button" 
          disabled={newAssign.length === 0}
          onClick={addAssign}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
