import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Artists from './components/Artists';
import './assets/materialize.min.css';
import Nav from './Nav';
import Albums from './components/Albums';
import Tweets from './components/Tweets';

function App() {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
          <Nav />
            <h1>An Awesome App!</h1>
          </Link>
        </header>
        <Switch>
          <Route exact path="/">
            <Artists />
          </Route>
          <Route path="/albums/:id">
            <Albums />
          </Route>
          <Route path="/tweets/:id">
            <Tweets />
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
