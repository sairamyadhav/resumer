import { useContext } from 'react';
import { authContext } from '../contexts/AuthContextProvider';

function Home() {

  const { user, login, logout } = useContext(authContext);

  return (
    <div>{ user ? user.username : 'Anonymous' }</div>
  )
}

export default Home