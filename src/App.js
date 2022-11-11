import { Switch, Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContexte from './Store/AuthContext';
function App() {
  const autctx = useContext(AuthContexte)
  const loggedIn = autctx.logged
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!loggedIn && <Route path='/auth'>
          <AuthPage />
        </Route>}
        {loggedIn && <Route path='/profile'>
          <UserProfile />
        </Route>}
        <Route to='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
