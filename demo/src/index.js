import React, { Component } from "react";
import { render } from "react-dom";

import { SpinnerFace } from "../../src/Spinner";
import { DynamicRotate } from "../../src/DynamicSpinner";

class Demo extends Component {
  render() {
    const styleObj = {
      innerWidth: "40px",
      innerHeight: "40px",
      width: "70px",
      height: "70px",
    };
    return (
      <div>
        <h1>h-react-loader Demo</h1>
        <DynamicRotate style={styleObj}>
          <SpinnerFace />
        </DynamicRotate>
        <SpinnerFace />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
