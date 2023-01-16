import React, {useState, useEffect} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { QUESTIONS } from './questionData';

const Result = () =>{
    const history = useHistory();
    const location = useLocation();
    const [result, setResult] = useState("");

    useEffect(()=>{
        showResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const TransTop = () => {
        history.push('/');
    }

    const showResult = () => {
        if(Number(location.state.correct) === QUESTIONS.length) {
            setResult("全問正解です。");
        } else {
            setResult(`${location.state.correct}問正解!!`);
        }
    }
    
    return(
        <React.StrictMode>
            <TITLE>結果発表</TITLE>
            <RESULT>{result}</RESULT>
            <RESULT>{location.state.point}ポイント<ul /></RESULT>
            <Button onClick={TransTop}>トップ画面へ戻る。</Button>
        </React.StrictMode>
        
    );
}

const TITLE = styled.h1`
    font-family: "ヒラギノ丸ゴ ProN";
    margin-top: 32px;
    margin-bottom: 64px;
    font-size: 56px;
`;

const RESULT = styled.h2`
    font-family: "ヒラギノ丸ゴ ProN";
    line-height: 64px;
    margin-top: 16px;
    magin-bottom: 64px;
    font-size: 40px;
`;

const Button = styled.button`
    width: 100%;
    height: 48px;
    margin-top: 150px;
    line-height: 48px;
    border-radius: 8px;
    color: white;
    background-color: #4366ff;
    font-family: "ヒラギノ丸ゴ ProN";
    
`;

export {Result};