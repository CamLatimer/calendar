import React from 'react';
import MonthDisplay from './MonthDisplay';
import DayRow from './DayRow';
import DateCell from './DateCell';
import DateUtil from '../utils/timeUtil';
import styles from '../styles/calendar.scss';

export default class Calendar extends React.Component {
constructor(){
  super();
  this.state = new DateUtil;

  this.handlers = {
    upMonth: () => {
      if(this.state.monthIndex === 11){
        this.setState({monthIndex: 0});
        this.setState({calYear: this.state.calYear + 1})
      } else{
         this.setState({monthIndex: this.state.monthIndex + 1});
      }
    },
    downMonth: () => {
      if(this.state.monthIndex === 0){
        this.setState({monthIndex: 11})
        this.setState({calYear: this.state.calYear - 1});
      } else {
      this.setState({monthIndex: this.state.monthIndex - 1})
      }
    },
    upYear: () => {
      this.setState({calYear: this.state.calYear + 1});
    },
    downYear: () => {
      this.setState({calYear: this.state.calYear - 1})
    }
  };
    this.cellHolder = [];
    for(let i = 0; i < 42; i++){
      this.cellHolder.push(i);
    }
    this.gridMkr = () => {
      return this.cellHolder.map((num) => {
        let totalDays = this.state.getMonthDays(this.state.calYear, this.state.monthIndex);
        let startDate = new Date(this.state.calYear, this.state.monthIndex, 0);
        let firstDate = startDate.getDate();
        let firstDay = startDate.getDay() + 1;

        if(num >= firstDay && num < totalDays + firstDay){
          let dateNumber = num + (1 - firstDay)
          let dayOfWeek = new Date(this.state.calYear, this.state.monthIndex, dateNumber );
          return <DateCell key={num} day={dateNumber} weekday={dayOfWeek}/>
        } else{
          return <DateCell key={num} />
        }
      });
    }
}


  render(){
    return (
      <div>
        <MonthDisplay monthName={this.state.months[this.state.monthIndex]} calYear={this.state.calYear} handlers={this.handlers} />
        <DayRow />
        <div className={styles.gridContain}>
          {this.gridMkr()}
        </div>
      </div>
    )
  }
}
