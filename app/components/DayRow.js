import React from 'react';
import styles from '../styles/calendar.scss'

export default () => {
  return (
    <div className={styles.gridContain}>
      <div className={[styles.col, styles.cell].join(' ')}>Sunday</div>
      <div className={[styles.col, styles.cell].join(' ')}>Monday</div>
      <div className={[styles.col, styles.cell].join(' ')}>Tuesday</div>
      <div className={[styles.col, styles.cell].join(' ')}>Wednesday</div>
      <div className={[styles.col, styles.cell].join(' ')}>Thursday</div>
      <div className={[styles.col, styles.cell].join(' ')}>Friday</div>
      <div className={[styles.col, styles.cell].join(' ')}>Saturday</div>
    </div>
  )
}
