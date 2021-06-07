import './App.css';
import Homepage from './components/Homepage/Homepage';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignUp from './components/UserForms/SignUp';
import SignIn from './components/UserForms/SignIn';
import CardDoctorPage from './components/cardDoctorPage/cardDoctorPage';
import { useSelector } from 'react-redux';

function App() {

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/homepage/:id">
          <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
