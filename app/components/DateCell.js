import React from 'react';
import styles from '../styles/calendar.scss';


export default (props) => {
  const headline = () => {
    if(props.shows){
      return props.shows.map(function(show, index){
        if(parseInt(show.date, 10) === props.day)
          return <li key={index}>{show.show}</li>
      })
    }
  }
  return (
  <div className={[styles.col, styles.date, styles.cell].join(' ')}>
    <h4>{props.day}</h4>
    <ul>
      {headline()}
    </ul>
    <div>
    </div>
  </div>
  )
}
