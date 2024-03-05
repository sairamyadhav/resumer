import { createContext, useState } from 'react';

export const authContext = createContext();

function AuthContextProvider({ children }) {

  const [user, setUser] = useState({
    username: localStorage.getItem('username') || '',
    isLogin: localStorage.getItem('isLogin') || false,
  })

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('username', userData.username);
    localStorage.setItem('isLogin', userData.islogin)
  }

  const logout = () => {
    setUser({
      username: '',
      isLogin: false,
    })
    localStorage.clear();
  }

  return (
    <authContext.Provider value={ user, login, logout }>{ children }</authContext.Provider>
  )
}

export default AuthContextProvider