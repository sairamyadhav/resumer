import { Route, Navigate, Outlet } from 'react-router-dom';
import { useContext } from'react';
import { authContext } from '../contexts/AuthContextProvider';

function ProtectedRoute() {

    const { user } = useContext(authContext);

  return (
    user && user.isLogin == true ? <Outlet /> : <Navigate to="/login" />
  )
}

export default ProtectedRoute