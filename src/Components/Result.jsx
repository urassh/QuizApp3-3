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
            <h1>結果発表</h1>
            <h2>正解数は{location.state.correct}問です。</h2>
            <Button onClick={TransTop}>トップ画面へ戻る。</Button>
        </React.StrictMode>
        
    );    
}

const Button = styled.button`
    width: 100%;
    height: 48px;
    margin-top: 16px;
    line-height: 48px;
    border-radius: 8px;
    color: white;
    background-color: #4366ff;
`;

export {Result};