import React, { Component } from "react";
import Tugas9 from "./Tugas-9/tugas9";
import Tugas10 from "./Tugas-10/tugas10";
import Tugas11 from "./Tugas-11/tugas11";
import data from "./Tugas-10/data";

class App extends Component {
  render() {
    return (
      <div>
        <Tugas9 />
        <Tugas10 data={data} />
        <Tugas11 />
      </div>
    );
  }
}

export default App;
