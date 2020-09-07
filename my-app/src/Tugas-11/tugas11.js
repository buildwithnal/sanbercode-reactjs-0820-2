import React, { Component } from "react";
import "./tugas11.css";

class tugas11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 100,
      show: true,
      date: new Date(),
    };
  }

  tick() {
    this.setState({
      seconds: this.state.seconds - 1,
      date: new Date(),
    });

    if (this.state.seconds === 0) {
      this.setState({
        show: false,
      });
      clearInterval(this.myInterval);
    }

    console.log(this.state.seconds);
    console.log(this.state.show);
  }

  componentDidMount() {
    this.myInterval = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <>
        {this.state.show === true ? (
          <h1 style={{ textAlign: "center" }}>
            <span>It is {this.state.date.toLocaleTimeString()}.</span> Time
            Remaining: {this.state.seconds}
          </h1>
        ) : null}
      </>
    );
  }
}

export default tugas11;
