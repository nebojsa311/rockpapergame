import React from "react";
import "./App.css";
import Choices from "./Choices.jsx";
import Info from "./Info";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moved: false,
      choice: "",
      cpuChoice: "",
      result: "",
      score: 0,
    };

    this.move = this.move.bind(this);
    this.playGame = this.playGame.bind(this);
  }

  playGame() {
    let user = this.state.choice;
    let user2 = this.state.cpuChoice;

    if(user === user2) {
      this.setState({ result: "IT IS A DRAW!" })
    } else if( user === "ROCK"){
      if (user2 === "PAPER"){
        this.setState({ result: "YOU LOSE!", score: this.state.score - 1 });
      } else if(user2 === "SCISSORS") {
        this.setState({ result: "YOU WON!", score: this.state.score + 1 });
      }
    } else if(user === "PAPER") {
      if(user2 === "ROCK"){
        this.setState({ result: "YOU WON!", score: this.state.score + 1 });
      } else if(user2 === "SCISSORS"){
        this.setState({ result: "YOU LOSE!", score: this.state.score - 1 });
      }
    } else if(user === "SCISSORS") {
      if(user2 === "PAPER") {
        this.setState({ result: "YOU WON!", score: this.state.score + 1 });
      } else if(user2 === "ROCK") {
        this.setState({ result: "YOU LOSE!", score: this.state.score - 1 });
      }
    }
  }

  move(e) {
    if (!this.state.moved) {
      document.getElementById("ROCK").style.transform = "translate(0, 0)";
      document.getElementById("PAPER").style.transform = "translate(0, 0)";
      document.getElementById("SCISSORS").style.transform = "translate(0, 0)";
      document.getElementById(e.target.id).style.transform =
        "translate(0, 20vh)";
      const choices = ["ROCK", "PAPER", "SCISSORS"];
      let cpuChoice = "";
      function randomchoice() {
        return (cpuChoice = choices[Math.floor(Math.random() * 3)]);
      }
      randomchoice();
      this.setState({
        moved: !this.state.moved,
        choice: e.target.id,
        cpuChoice: cpuChoice,
      });
    } else {
      document.getElementById("ROCK").style.transform = "translate(0, 0)";
      document.getElementById("PAPER").style.transform = "translate(0, 0)";
      document.getElementById("SCISSORS").style.transform = "translate(0, 0)";
      this.setState({
        moved: !this.state.moved,
        choice: "",
        cpuChoice: "",
      });
    }
  }

  render() {
    return (
      <div id="container">
        <Choices move={this.move} />
        <Info choice={this.state.choice} cpuChoice={this.state.cpuChoice} playGame={this.playGame} result={this.state.result} score={this.state.score} />
      </div>
    );
  }
}

export default App;
