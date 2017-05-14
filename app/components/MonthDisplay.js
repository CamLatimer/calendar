import React from 'react';
import styles from '../styles/calendar.scss'

export default (props) => {
  return (
    <div>
      <div>
        <h1 className={styles.monthTitle}>{props.monthName}</h1>
        <div className={styles.buttonHolder}>
          <button className={styles.monthSub} onClick={props.handlers.downMonth}>
            &#8592;
          </button>
          <button className={styles.monthAdd}    onClick={props.handlers.upMonth}>
            &rarr;
          </button>
        </div>
        <h1 className={styles.yearTitle}>{props.calYear}</h1>
        <div className={styles.buttonHolder}>
           <button className={styles.yearSub} onClick={props.handlers.downYear}>
             &#8592;
           </button>
           <button className={styles.yearAdd} onClick={props.handlers.upYear}>
             &rarr;
           </button>
        </div>
      </div>
      <div>
        <h1 className={styles.monthToggle}>


        </h1>
      </div>
    </div>
  )
}
