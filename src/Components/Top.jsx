import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const Top = () => {
    const history = useHistory();

    const TransAnswer = () => {
        history.push('/answer');
    }

    return(
        <React.StrictMode>
            <TITLE>3-3専用 <ul /> クイズアプリ</TITLE>
            <Button onClick={TransAnswer}>クイズに挑戦</Button>
        </React.StrictMode>
    );
}

const TITLE = styled.h1`
    font-family: "ヒラギノ丸ゴ ProN";
    font-size: 32px;
    margin-bottom: 300px;
`;

const Button = styled.button`
    width: 100%;
    height: 48px;
    margin-top: 16px;
    padding:16px 0 ;
    line-height: 48px;
    border-radius: 8px;
    color: white;
    background-color: #ff4343;
    font-family: "ヒラギノ丸ゴ ProN";
    font-size: 24px;
`;

export {Top};