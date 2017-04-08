import React from 'react';
import SearchForm from './Search';
import MonthDisplay from './MonthDisplay';
import DayRow from './DayRow';
import DateCell from './DateCell';
import DateUtil from '../utils/timeUtil';
import styles from '../styles/calendar.scss'

export default class Calendar extends React.Component {
constructor(){
  super();
  this.state = new DateUtil;
  this.state.searchValue = 'enter a location'; // init search input state to be passed down
  this.monthSet = this.state.monthIndex;
  this.yearSet = this.state.calYear;

  // function that gets the value of the search box
  this.grabVal = (val) => {
    this.setState({searchValue: val})
  }
// setup AJAX here
  this.apiReq = () => {
    console.log(this.state.searchValue);
  }

  this.handlers = {
    upMonth: () => {
      this.monthSet++;
      if(this.monthSet === 12){
        this.monthSet = 0;
        this.yearSet++;
        this.setState({calYear: this.yearSet})
      }
      this.setState({monthIndex: this.monthSet});
    },
    downMonth: () => {
      this.monthSet--;
      if(this.monthSet === -1){
        this.monthSet = 11;
        this.yearSet--;
        this.setState({calYear: this.yearSet});
      }
      this.setState({monthIndex: this.monthSet})
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
      this.gridCells = this.cellHolder.map((num) => {
        let totalDays = this.state.getMonthDays(this.state.calYear, this.state.monthIndex);
        // get day first Date of the month
        let startDate = new Date(this.state.calYear, this.state.monthIndex, 0);
        let firstDate = startDate.getDate();
        let firstDay = startDate.getDay() + 1;

        if(num >= firstDay && num < totalDays + firstDay){
          return <DateCell key={num} day={num + (1 - firstDay)}/>
        }

        return <DateCell key={num} />
      });
    }
}
  render(){
    this.gridMkr();
    return (
      // Calendar state will have the value of the search box
      // on submit, the search box will lift up state and setState for the Calendar
      // use the value in an AJAX call
      <div>
        <SearchForm searchVal={this.state.searchValue} call={this.apiReq} getVal={this.grabVal} />
        <MonthDisplay monthName={this.state.months[this.state.monthIndex]} calYear={this.state.calYear} handlers={this.handlers} />
        <DayRow />
        <div className={styles.gridContain}>
          {this.gridCells}
        </div>
      </div>
    )
  }
}
