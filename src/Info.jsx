import React from 'react';
import "./info.css";

function Info(props) {
    return(
        <div id="infoWrapper">
            <p id="choiceOne">YOU PICKED: {props.choice}</p>
            <p id="choiceTwo">HOUSE PICKED: {props.cpuChoice}</p>
            <button onClick={props.reset}>Reset score</button>
            <p id="result">{props.result}</p>
            <p id="score">SCORE: {props.score}</p>
        </div>
    )
}

export default Info;