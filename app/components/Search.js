import React from 'react';
import styles from '../styles/calendar.scss'

export default class SearchForm extends React.Component {
  constructor (props) {
    super();
    this.handleChange = (event) => {
      this.props.getVal(event.target.value);
    }
    this.liftUpState = (event) => {
      event.preventDefault();
      this.props.call();
    }
  }
  render() {
    return (
      <form onSubmit={this.liftUpState}>
        Search:
        <input type="text" value={this.props.searchVal} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
