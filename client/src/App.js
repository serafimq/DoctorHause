import './App.css';
import CardDoctorPage from './components/cardDoctorPage/cardDoctorPage';
import Homepage from './components/Homepage/Homepage';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignUpChoose from './components/UserForms/SignUpChoose';
import SignIn from './components/UserForms/SignIn';
import SignUpDoctor from './components/UserForms/SignUpDoctor';
import SignUpPatient from './components/UserForms/SignUpPatient';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/homepage"> 
            <Homepage/>
          </Route>
          <Route exact path="/signup"> 
            <SignUpChoose/>
          </Route>
          <Route exact path="/signupdoctor">
            <SignUpDoctor/>
          </Route>
          <Route exact path="/signuppatient">
            <SignUpPatient/>
          </Route>
          <Route exact path="/signin"> 
            <SignIn/>
          </Route>
          <Route exact path="/">
            <MainPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
