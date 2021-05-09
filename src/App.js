import React from "react";
import "./App.css";
import Choices from "./Choices.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moved: false,
      choice: "None",
    };

    this.move = this.move.bind(this);
  }

  move(e) {
    if(!this.state.moved){
      document.getElementById("rock").style.transform = "translate(0, 0)";
      document.getElementById("paper").style.transform = "translate(0, 0)";
      document.getElementById("scissors").style.transform = "translate(0, 0)";
      document.getElementById(e.target.id).style.transform = "translate(0, 20vh)";
      this.setState({ moved: !this.state.moved, choice: e.target.id });

    } else {
      document.getElementById("rock").style.transform = "translate(0, 0)";
      document.getElementById("paper").style.transform = "translate(0, 0)";
      document.getElementById("scissors").style.transform = "translate(0, 0)";
      this.setState({ moved: !this.state.moved, choice: "None" });
    }
  }

  render() {
    return (
      <div id="container">
        <Choices move={this.move} />
      </div>
    );
  }
}

export default App;
