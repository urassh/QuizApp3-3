import '../App.css';
import React, { useState } from 'react';
import { QUESTIONS } from './questionData';
import { useHistory } from 'react-router-dom';
import correctImage from "../Images/correct.jpeg";
import incorrectImage from "../Images/incrrect.png"
import styled from "styled-components";
import Modal from "react-modal";

const Answer = ()=>{
    const [quizIndex, setQuizIndex] = useState(0);
    const [correctCount, setcorrectCount] = useState(0);
    const [showResultForm, setshowResultForm] = useState(false);
    const [result, setResult] = useState("");
    const [displayResultImage, setDisplayResultImage]= useState("");
    const history = useHistory();

    const quizHandler = (e)=> {
        const answered = e.currentTarget.id;
        quizJudge(answered);
        if (quizIndex < QUESTIONS.length-1) {
            setshowResultForm(true);
        } else {
            setshowResultForm(true);
        }
    }

    const nextQuiz = () => {
        setshowResultForm(false);
        if (!(quizIndex < QUESTIONS.length-1)){
            history.push({
                pathname: '/result',
                state: {correct: correctCount}
            });
        } else {
            setQuizIndex(()=> quizIndex+1 );
        }
    }

    const quizJudge = (answerButtonIndex) => {
        const correct = QUESTIONS[quizIndex].correctAnswer;
        const answer = Number(answerButtonIndex);
        if(answer === correct) {
            setcorrectCount(()=> correctCount+1);
            setDisplayResultImage(correctImage);
            setResult("正解です!!");
        } else {
            setDisplayResultImage(incorrectImage);
            setResult("不正解です...");
        }
    }

    return(
        <div className="quiz-container">
            <Modal isOpen={showResultForm}>
                <div id="result-form">
                    <h1>{result}</h1>
                    <img src={displayResultImage} alt="incrrectImage" />
                    <Button onClick={nextQuiz}>次へ</Button>
                </div>
            </Modal>
            
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

const Button = styled.button`
    width: 100%;
    height: 48px;
    margin-top: 40px;
    line-height: 48px;
    border-radius: 8px;
    color: white;
    background-color: #4366ff;
    font-family: "ヒラギノ丸ゴ ProN";
    &:hover {
        opacity: .8;
    }
    &:active {
        opacity: .5;
    }
`;

export {Answer};