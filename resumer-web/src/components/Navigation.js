import { useContext } from 'react';
import { Link } from'react-router-dom';
import { authContext } from '../contexts/AuthContextProvider';

function Navigation() {

  const { user } = useContext(authContext);

  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/resume">Resume</Link>
    { user && user.isLogin ? <Link to="/login">Logout</Link> :
    <><Link to="/siginin">Sign In</Link>
    <Link to="/login">Login</Link></>}
    </>
  )
}

export default Navigation