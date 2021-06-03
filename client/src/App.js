import './App.css';
import Homepage from './components/Homepage/Homepage';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import SignUp from './components/UserForms/SignUp';
import SignIn from './components/UserForms/SignIn';
import { signout } from './redux/actionCreators/userAC';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router";

function App() {

  const id = useSelector(state => state.user._id)
  const isAuth = useSelector(state => state.user.isAuth) 
  console.log(id);
  const dispatch = useDispatch()

  const deleteHandler = async (id) => {
    dispatch(signout(id))
  }

  // isAuth ?
  // <Redirect to="/"/>
  // :

  return (

    <div className='App'>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage />
          <Link to={'/signup'}>Зарегистрироваться</Link><br/>
          <Link to={'/signin'}>Авторизоваться</Link><br/>
          <Link onClick={() => deleteHandler(id)} to={'/'}>Выйти</Link>
        </Route>
        <Route exact path='/signup'>
        <Link to={'/'}>Главная</Link>
          <SignUp/>    
        </Route>
        <Route exact path='/signin'>
        <Link to={'/'}>Главная</Link>
          <SignIn/>    
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
