import './App.css';
import Homepage from './components/Homepage/Homepage';
import RegistreForm from './components/RegistreForm/RegistreForm.jsx';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage />
          <Link to={'/registration'}>Зарегистрироваться</Link>
        </Route>
        <Route exact path='/registration'>
          <RegistreForm/>    
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
