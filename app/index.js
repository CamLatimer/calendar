import ReactDOM from "react-dom";
import React from "react";
import Calendar from "./components/Calendar";


class Root extends React.Component{
  render(){
    return <Calendar />;
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
