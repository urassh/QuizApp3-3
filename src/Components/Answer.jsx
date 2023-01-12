import '../App.css';
import React from 'react';
import {QUESTIONS} from './questionData';

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quizIndex: 0};
        
    }

    quizHandler = (e)=> {
        const answered = e.currentTarget.id;
        console.log(`index : ${this.state.quizIndex}`);
        console.log(`question : ${QUESTIONS.length}`);
        if (this.state.quizIndex < QUESTIONS.length-1) {
            console.log(this.quizJudge(answered));
            this.setState({quizIndex: this.state.quizIndex+1});
        } else {
            console.log("回答数が問題数を超えました。");
        }
    }

    quizJudge(answerButtonIndex) {
        let result = "正誤";
        if(Number(answerButtonIndex) === QUESTIONS[this.state.quizIndex].correctAnswer) {
            result = "正解です。"
        } else {
            result = `不正解です。正解は${QUESTIONS[this.state.quizIndex].correctAnswer}`
        }
        return result;
    }

    render() {
        return(
            <div className="quiz-container">
                <h1>第 {this.state.quizIndex+1} 問</h1>
                <p id="quiz-text">
                    {QUESTIONS[this.state.quizIndex].quiestionText}
                </p>
                <div className="answer-buttons">
                    <button id="1" className="answer-button button-1" onClick={this.quizHandler}>
                        {QUESTIONS[this.state.quizIndex].answerButtons[0]}
                    </button>
                    <button id="2" className="answer-button button-2" onClick={this.quizHandler}>
                        {QUESTIONS[this.state.quizIndex].answerButtons[1]}
                    </button>
                    <button id="3" className="answer-button button-3" onClick={this.quizHandler}>
                        {QUESTIONS[this.state.quizIndex].answerButtons[2]}
                    </button>
                    <button id="4" className="answer-button button-4" onClick={this.quizHandler}>
                        {QUESTIONS[this.state.quizIndex].answerButtons[3]}
                    </button> 
                </div>
            </div>
        );
    }
}

export default Answer;