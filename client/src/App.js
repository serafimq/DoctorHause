import './App.css';
import Homepage from './components/Homepage/Homepage';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignUp from './components/UserForms/SignUp';
import SignIn from './components/UserForms/SignIn';
import History from './components/History/History';
import MapPage from './components/MapPage/MapPage';


function App() {

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>


          <Route exact path="/homepage/history/:id">
            <History />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/">
            <MainPage />
          </Route>

          {/* <Route exact path="/homepage/calendar/:id">
            <Homepage />
          </Route> */}

          <Route exact path="/homepage/map/:id">
            <MapPage />
          </Route>

          <Route exact path="/homepage/:id">
            <Homepage />
          </Route>

          <Route exact path="/">
          </Route>

          <Route exact path="/">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
