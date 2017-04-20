import React from 'react';
import styles from '../styles/calendar.scss'


export default (props) => {
  return (
    <div className={[styles.col, styles.date, styles.cell].join(' ')}> {props.day} {props.showTest}</div>
  )
}
