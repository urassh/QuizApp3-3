import {Top} from './Components/Top';
import { Answer } from './Components/Answer';
import { Result } from './Components/Result';
import { FinalView } from './Components/FinalView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from "styled-components";

const App = () => {
  return (
    <BrowserRouter>
      <QuizContainer>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`}>
            <Top />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/QuizApp3-3/answer`}>
            <Answer />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/QuizApp3-3/result`}>
            <Result />
          </Route>
          <Route  path={`${process.env.PUBLIC_URL}/QuizApp3-3/final`}>
            <FinalView />
          </Route>
        </Switch>
      </QuizContainer>
    </BrowserRouter>
    
  );
}

const QuizContainer = styled.div`
  margin: 30px auto 0;
  width: 330px;
  height: 600px;
  background-color: white;
  text-align: center;
  padding: 16px;
`;
export default App;
