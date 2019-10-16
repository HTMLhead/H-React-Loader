import React, { Component } from "react";
import { render } from "react-dom";

import { SpinnerFace } from "../../src/Spinner";
import { DynamicRotate } from "../../src/DynamicSpinner";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>h-react-loader Demo</h1>
        <DynamicRotate />
        <SpinnerFace />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
