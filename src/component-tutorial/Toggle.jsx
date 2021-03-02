import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
    // 1. 일반적으로 사용되는 이벤트 this 바인딩
    // this.handleClick1 = this.handleClick1.bind(this);
  }

  // 1. 일반적으로 사용되는 이벤트 this 바인딩
  handleClick1() {
    this.setState(({ status }) => ({
      status: !status,
    }));
  }

  // 2. 퍼블릭 클래스 필드 문법으로 this 바인딩
  handleClick2 = () => {
    this.handleClick1();
  };

  handleArgument(flag, num, bool, str, event) {
    console.log("This status is ", flag, num, bool, str, event);
  }

  render() {
    return (
      //   <button onClick={this.handleClick1}>
      //   <button onClick={this.handleClick2}>
      // 3. 콜백에 화살표 함수 사용, 단, props으로 전달되는 콜백함수인 경우 렌더링이 다시 될 수 있기 때문에 권장하지 않음.
      //   <button onClick={() => this.handleClick1()}>
      // 인자가 있는 콜백 유형 2가지 - 이벤트 인자가 마지막에 전달된다.
      //   <button onClick={(e) => this.handleArgument('BOOM!', e)}>
      // 바인딩 형태인 경우, 이벤트 인자는 자동으로 전달된다.
      <button
        onClick={this.handleArgument.bind(this, "BOOM!", 200, true, "asdf")}
      >
        {this.state.status ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;
