import React from 'react';
import styles from '../styles/calendar.scss'

export default class SearchForm extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = (event) => {
      this.props.setSearchValue(event.target.value);
    }
    this.handleSubmit = (event) => {
      event.preventDefault();
      this.props.triggerSearch();
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Search:
        <input type="text" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
