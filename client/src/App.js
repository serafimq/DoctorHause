import './App.css';
import CardDoctorPage from './components/cardDoctorPage/cardDoctorPage';
import Homepage from './components/Homepage/Homepage';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import RegistreForm from './components/RegistreForm/RegistreForm.jsx';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/homepage" render={() => <Homepage />} />
          <Route exact path="/" render={() => <CardDoctorPage />} />
          <Route exact path="/registration" render={() => <RegistreForm />} />
          <Route exact path="/" render={() => <MainPage />} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
