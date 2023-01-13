import '../App.css';
import React, { useState } from 'react';
import { QUESTIONS } from './questionData';

const Answer = ()=>{

    const [quizIndex, setQuizIndex] = useState(0);

    const quizHandler = (e)=> {
        const answered = e.currentTarget.id;
        
        console.log(`index : ${quizIndex}`);
        console.log(`question : ${QUESTIONS.length}`);
        if (quizIndex < QUESTIONS.length-1) {
            console.log(quizJudge(answered));
            setQuizIndex(()=> quizIndex+1 );
        } else {
            console.log("回答数が問題数を超えました。");
            
        }
    }

    const quizJudge = (answerButtonIndex) => {
        let result = "正誤";
        if(Number(answerButtonIndex) === QUESTIONS[quizIndex].correctAnswer) {
            result = "正解です。"
        } else {
            result = `不正解です。正解は${QUESTIONS[quizIndex].correctAnswer}`
        }
        return result;
    }

    
    return(
        <div className="quiz-container">
            <h1>第 {quizIndex+1} 問</h1>
            <p id="quiz-text">
                {QUESTIONS[quizIndex].quiestionText}
            </p>
            <div className="answer-buttons">
                <button id="1" className="answer-button button-1" onClick={quizHandler}>
                    {QUESTIONS[quizIndex].answerButtons[0]}
                </button>
                <button id="2" className="answer-button button-2" onClick={quizHandler}>
                    {QUESTIONS[quizIndex].answerButtons[1]}
                </button>
                <button id="3" className="answer-button button-3" onClick={quizHandler}>
                    {QUESTIONS[quizIndex].answerButtons[2]}
                </button>
                <button id="4" className="answer-button button-4" onClick={quizHandler}>
                    {QUESTIONS[quizIndex].answerButtons[3]}
                </button> 
            </div>
        </div>
    );
}

export {Answer};