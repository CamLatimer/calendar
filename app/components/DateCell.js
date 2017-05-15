import React from 'react';
import styles from '../styles/calendar.scss'


export default (props) => {
  let classNameList = [styles.date, styles.cell];
  let displayDate = '';
  if(!props.day){
    classNameList.push(styles.noDay)
  } else if (props.day){
    displayDate = props.weekday.toString().slice(0, 16);
  }
  classNameList = classNameList.join(' ');

  console.log(props.weekday);

  return (
    <div className={classNameList}>
      <h3 className={styles.displayDate}>{displayDate}</h3>
       <p className={styles.dateNum}>{props.day}</p>
     </div>
  )
}
