import './App.css';
import Homepage from './components/Homepage/Homepage';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignUp from './components/UserForms/SignUp';
import SignIn from './components/UserForms/SignIn';
import CardDoctorPage from './components/cardDoctorPage/cardDoctorPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Router exact path="/homepage">
            <Homepage />
          </Router>
          <Router exact path="/signup">
            <SignUp />
          </Router>
          <Router exact path="/signin">
            <SignIn />
          </Router>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/homepage/user/:id">
            <CardDoctorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
