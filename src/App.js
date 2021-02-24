import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from 'react-router-dom';
import Staking from './components/Staking/Staking.lazy';
import Error from './components/Error/Error.lazy';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Staking} />
          <Route exact path='/error' component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
