import './App.css';
import Homepage from './components/Homepage/Homepage';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignUpChoose from './components/UserForms/SignUpChoose';
import SignIn from './components/UserForms/SignIn';
import History from './components/History/History';
import MapPage from './components/MapPage/MapPage';

import SignUpDoctor from './components/UserForms/SignUpDoctor';
import SignUpPatient from './components/UserForms/SignUpPatient';
import Login from './components/UserForms/Login/Login';

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
            <SignUpChoose />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/signupdoctor">
            <SignUpDoctor />
          </Route>
          <Route exact path="/signuppatient">
            <SignUpPatient />
          </Route>
          <Route exact path="/homepage/map/:id">
            <MapPage />
          </Route>
          <Route exact path="/homepage/:id">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
