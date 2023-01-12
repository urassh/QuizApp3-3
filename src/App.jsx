import Answer from './Components/Answer';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  console.log("test1");
  console.log("test2");

  return (
    <BrowserRouter>
      <Route path="/">
        <Answer />
      </Route>
    </BrowserRouter>
    
  );
}

export default App;
