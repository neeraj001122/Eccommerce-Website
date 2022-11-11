import { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import AuthContexte from '../../Store/AuthContext';

const MainNavigation = () => {
  const autctx = useContext(AuthContexte)
  const history = useHistory()
  const loggedIn = autctx.logged  
  const logoutHandler = () => {
    autctx.isLoggedIn()
    history.replace('/auth')
    autctx.token = null;
    localStorage.removeItem('token')
  };
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            {!loggedIn && <Link to='/auth'>Login</Link>}
          </li>
          <li>
            {loggedIn && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
            {loggedIn && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
