import React from 'react';
import SearchForm from './Search';
import MonthDisplay from './MonthDisplay';
import DayRow from './DayRow';
import DateCell from './DateCell';
import DateUtil from '../utils/timeUtil';
import Search from './Search';
import { getEventData } from '../utils/Songkick';
import styles from '../styles/calendar.scss';

export default class Calendar extends React.Component {
constructor(){
  super();
  this.state = new DateUtil;
  this.state.locationId = null;
  this.setSearchValue = (val) => {
    this.setState({searchValue: val});
  }
  this.triggerSearch = () => {
    let endDate = this.state.getMonthDays(this.state.calYear, this.state.monthIndex);
    getEventData(this.state.searchValue, this.state.calYear, this.state.monthIndex, endDate).then((data) => {
            this.setState({showTest: data[0].show})
    })
  }
  this.handlers = {
    upMonth: () => {
      if(this.state.monthIndex === 11){
        this.setState({monthIndex: 0});
        this.setState({calYear: this.state.calYear + 1})
      } else{
         this.setState({monthIndex: this.state.monthIndex + 1});
         this.setState({searchValue: this.state.searchValue});
      }
    },
    downMonth: () => {
      if(this.state.monthIndex === 0){
        this.setState({monthIndex: 11})
        this.setState({calYear: this.state.calYear - 1});
      } else {
      this.setState({monthIndex: this.state.monthIndex - 1})
      this.triggerSearch();
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
          return <DateCell key={num} showTest={this.state.showTest} day={num + (1 - firstDay)}/>
        } else{
          return <DateCell key={num} />
        }
      });
    }
}
componentDidUpdate(prevProps, prevState){
  if(prevState.monthIndex !== this.state.monthIndex || prevState.calYear !== this.state.calYear){
    let endDate = this.state.getMonthDays(this.state.calYear, this.state.monthIndex);
    getEventData(this.state.searchValue, this.state.calYear, this.state.monthIndex, endDate).then((data) => {
      this.setState({showTest: data[0].show})
      console.log(data);
    })
  }

}
  render(){
    return (
      <div>
        <Search  setSearchValue={this.setSearchValue} triggerSearch={this.triggerSearch} />
        <MonthDisplay monthName={this.state.months[this.state.monthIndex]} calYear={this.state.calYear} handlers={this.handlers} />
        <DayRow />
        <div className={styles.gridContain}>
          {this.gridMkr()}
        </div>
      </div>
    )
  }
}
