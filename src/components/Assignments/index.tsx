import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({listassign, setAssigns}) {
  let totalAssign = listassign.length;

  function getCompleted() {
    let doneAssignments = 0;
    for(let i = 0; i < totalAssign; i++) {
      doneAssignments += listassign[i].status == 1 ? 1 : 0;
    }
    return doneAssignments;
  }

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{totalAssign}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{getCompleted()} of {totalAssign}</span>
        </div>
      </header>

      <div className={styles.list}>
          <Assignment listassign={listassign} setAssigns={setAssigns}/>        
      </div>
    </section>
  );
}
