import React, { Component } from "react";

class App extends Component {

  startButton = document.querySelector('#startGame');
  giveUpButton = document.querySelector('#getAnswer');
  tryAgainButton = document.querySelector('#tryAgain');

  questionDataField = document.querySelector('#questionData');
  questionField = document.querySelector('#question');
  answerField = document.querySelector('#answer');

  async getData() {
    let response = await fetch('http://jservice.io/api/random?count=1');
    let data = await response.json();
    let result = await data[0];

    let category = await result.category.title;
    let difficulty = await result.value;
    let question = await result.question;
    let answer = await result.answer;

    return (category, difficulty, question, answer)
  }

  render(category, difficulty, question, answer) {
    return (
      <><header>
        <h1>Jeopardy!</h1>
        <h2>Test your knowledge!</h2>
        <button id="startGame">Game Start!</button>
      </header>
        <div id="container">
          <div id="questionData">{category}{difficulty}</div>
          <div id="question">{question}</div>
          <button id="getAnswer" className="notVisible">Show Answer</button>
          <div id="answer">{answer}</div>
          <button id="tryAgain" className="notVisible">Try Again!</button>
        </div>  </>
    )
  }

}

export default App;
