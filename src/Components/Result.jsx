import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from "styled-components";

const Result = () =>{
    const history = useHistory();
    const location = useLocation();
    
    const TransTop = () => {
        history.push('/');
    }

    return(
        <React.StrictMode>
            <TITLE>結果発表</TITLE>
            <RESULT>正解数は...<ul />{location.state.correct}問です!!</RESULT>
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
    magin-bottom: 64px;
    font-size: 48px;
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