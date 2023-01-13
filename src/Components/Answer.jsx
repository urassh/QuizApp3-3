import '../App.css';
import React, { useState } from 'react';
import { QUESTIONS } from './questionData';
import { useHistory } from 'react-router-dom';


const Answer = ()=>{

    const [quizIndex, setQuizIndex] = useState(0);
    const [correctCount, setcorrectCount] = useState(0);
    const history = useHistory();

    const quizHandler = (e)=> {
        const answered = e.currentTarget.id;
        
        console.log(`index : ${quizIndex}`);
        console.log(`question : ${QUESTIONS.length}`);
        quizJudge(answered);
        if (quizIndex < QUESTIONS.length-1) {
            setQuizIndex(()=> quizIndex+1 );
            console.log(`CorrectCount : ${correctCount}`);
        } else {
            console.log(`CorrectCount : ${correctCount}`);
            if (correctCount === 0) {
                console.log("correctCount ===0 ");
                history.push({
                    pathname: '/result',
                    state: {correct: correctCount}
                });
            } else {
                console.log("correctCount !==0 ");
                console.log(correctCount + 1);
                //useStateの使用で即座に+1が反映されないため、
                const updatedCorrectCount = correctCount + 1;
                history.push({
                    pathname: '/result',
                    state: {correct: updatedCorrectCount}
                });
            }
            
        }
    }

    const quizJudge = (answerButtonIndex) => {
        const correct = QUESTIONS[quizIndex].correctAnswer;
        const answer = Number(answerButtonIndex);
        console.log(`第${quizIndex+1}問目quizJudgeが呼ばれています。`);
        if(answer === correct) {
            setcorrectCount(()=> correctCount+1);
            console.log(`正解です。 現在${correctCount}問正解`);
        } else {
            console.log(`不正解です。Answer is ${QUESTIONS[quizIndex].correctAnswer}`)
            console.log(`現在${correctCount}問正解`);
        }
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