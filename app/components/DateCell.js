import React from 'react';
import styles from '../styles/calendar.scss'


export default (props) => {
  let classNameList = [styles.date, styles.cell];
  if(!props.day){
    classNameList.push(styles.noDay)
  }
  console.log(props.day);
  classNameList = classNameList.join(' ');
  return (
    <div className={classNameList}> {props.day}</div>
  )
}
