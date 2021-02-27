import React from "react";
import Welcome from "./Welcome";

// function Clock(props) {
//   return (
//     <div>
//       <Welcome name="JYS" />
//       <h2>It is {props.date.toLocaleDateString()}</h2>
//     </div>
//   );
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    return (
      <div>
        <Welcome name="JYS" />
        <h2>It is {this.state.date.toLocaleString()}</h2>
      </div>
    );
  }
}

export default Clock;
