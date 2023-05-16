import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiCircle } from "react-icons/fi";


export function Assignment({listassign, setAssigns}) {

  const clickAssign = (index) => {
    let newArr = [...listassign];
    newArr[index].status = newArr[index].status === 0 ? 1 : 0;
    setAssigns(newArr);
  }


  const removeAssign = (index) => {
    let newArr = [...listassign];
    newArr.splice(index,1);
    setAssigns(newArr);
  }

  
  const checks = (state: number) => {
    return state === 1 ? 1 : 0;
  };

  
  return (
    <>
      { Array.from(listassign).map((assign, index ) => (
        
          <div key={index} className={styles.assignment}>
              <button 
                value={checks(assign.status)}  
                className={styles.checkContainer} 
                onClick={()=>clickAssign(index)}
                >
              { assign.status == 1? <BsFillCheckCircleFill  size={20} />:  <FiCircle  size={20} />}
              <div />
              </button>
              <p className={assign.status == 1 ? styles.textCompleted : "" }>{assign.assignment}</p>
              <button 
                className={styles.deleteButton}
                onClick={()=>removeAssign(index)}
                >
                <TbTrash size={20} />
              </button>
            </div>
        ))
      }
   </>

  );
}
