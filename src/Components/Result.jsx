import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from "styled-components";

const Result = () =>{
    const history = useHistory();
    const location = useLocation();
    
    const TransTop = () => {
        history.push('/');
    }

    const Test = () => {
       console.log(`正解数は、${location.state.correct}`)
    }
    return(
        <React.StrictMode>
            <h1>結果発表</h1>
            <Button onClick={TransTop}>トップ画面へ戻る。</Button>
            <Button onClick={Test}>テストボタン</Button>
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