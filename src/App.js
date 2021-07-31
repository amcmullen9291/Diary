import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home.js';
import Entry from './Components/Entry.js';
import ShowEntry from './Components/ShowEntry'

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/DearDiary/NewEntry"} exact component={Entry}/>
          <Route path={"/DearDiary/entry/:id"} exact component={ShowEntry}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
