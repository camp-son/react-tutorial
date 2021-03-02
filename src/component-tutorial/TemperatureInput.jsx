import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    // this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
        <input
          value={this.props.temperature}
          onChange={this.handleChange.bind(this)}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
