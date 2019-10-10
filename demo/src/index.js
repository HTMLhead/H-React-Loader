import React, { Component } from "react";
import { render } from "react-dom";

import { SpinnerFace } from "../../src/Spinner";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>h-react-loader Demo</h1>
        <SpinnerFace />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
