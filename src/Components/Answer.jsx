import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from "react-modal";
import styled from "styled-components";

import '../App.css';
import { QUESTIONS } from './questionData';
import correctImage from "../Images/correct.png";
import incorrectImage from "../Images/incorrect.png"

const Answer = ()=>{
    const history = useHistory();

    const [quiz, setQuiz] = useState({
        index: 0,
        isCorrect: false,
        correctCount: 0,
        totalPoint: 0,
    });

    const [showResultModal, setshowResultModal] = useState(false);

    const quizHandler = (e)=> {
        const answered = e.currentTarget.id;
        quizJudge(answered);
        setshowResultModal(true);
    }

    const nextQuiz = () => {
        setshowResultModal(false);
        if (quiz.index === QUESTIONS.length-1){
            history.push({
                pathname: '/result',
                state: {correct: quiz.correctCount, point: quiz.totalPoint}
            });
        } else {
            setQuiz({...quiz, index: quiz.index+1, isCorrect: false});
        }
    }

    const quizJudge = (answerButtonIndex) => {
        const correct = QUESTIONS[quiz.index].correct;
        const answer = Number(answerButtonIndex);
        if(answer === correct) {
            setQuiz({...quiz,
                isCorrect: true,
                correctCount: quiz.correctCount+1,
                totalPoint: quiz.totalPoint +  QUESTIONS[quiz.index].point
            });
        } else {
            setQuiz({...quiz, isCorrect: false});
        }
    }

    const showResultModalImage = (isCorrect) => {
        if(isCorrect) {
            return <img src={correctImage} alt="incrrectImage" />;
        } else {
            return <img src={incorrectImage} alt="incrrectImage" />;
        }
    }

    return(
        <div className="quiz-container">
            <Modal isOpen={showResultModal}>
                <div id="result-form">
                    {showResultModalImage(quiz.isCorrect)}
                    <Button onClick={nextQuiz}>次へ</Button>
                </div>
            </Modal>
            
            <h1>第 {quiz.index+1} 問</h1>
            <p id="quiz-text">
                {QUESTIONS[quiz.index].text}
            </p>
            <div className="answer-buttons">
                <button id="1" className="answer-button button-1" onClick={quizHandler}>
                    {QUESTIONS[quiz.index].buttonsList[0]}
                </button>
                <button id="2" className="answer-button button-2" onClick={quizHandler}>
                    {QUESTIONS[quiz.index].buttonsList[1]}
                </button>
                <button id="3" className="answer-button button-3" onClick={quizHandler}>
                    {QUESTIONS[quiz.index].buttonsList[2]}
                </button>
                <button id="4" className="answer-button button-4" onClick={quizHandler}>
                    {QUESTIONS[quiz.index].buttonsList[3]}
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