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
            <h1>3-3専用 クイズアプリ</h1>
            <Button onClick={TransAnswer}>クイズに挑戦</Button>
        </React.StrictMode>
    );
}

const Button = styled.button`
    
`;
export {Top};