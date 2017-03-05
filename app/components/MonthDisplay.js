import React from 'react';
import styles from '../styles/calendar.scss'

export default (props) => {
  return (
    <div className={styles.row} >
      <div className={styles.col}>
        <h1 className={styles.monthName}>{props.monthName} &nbsp;&nbsp;&nbsp;
          <button className={styles.monthSub} onClick={props.handlers.downMonth}>- </button>  <button className={styles.monthAdd}
            onClick={
              () => {
                props.handlers.upMonth();
              }
            }> +  </button>
        </h1>
        <h1>
          {props.calYear} &nbsp;
           <button className={styles.yearSub} onClick={props.handlers.downYear}>- </button>  <button className={styles.yearAdd} onClick={props.handlers.upYear}> +  </button>
        </h1>
      </div>
      <div className={styles.col}>
        <h1 className={styles.monthToggle}>


        </h1>
      </div>
    </div>
  )
}
