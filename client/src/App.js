import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import OtherPage from './OtherPage';
import Fib from './Fib';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Fib Calculate</p>

          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
