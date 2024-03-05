import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { createContext, useState } from 'react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import AuthContextProvider from './contexts/AuthContextProvider';
import ProtectedRoute from './components/ProtectedRoute';

function App() {


  return (
    <div className="App">
      <AuthContextProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/resume" element={<ProtectedRoute />}>
          <Route path="/resume" element={<div>resume</div>} />
        </Route>
        <Route path="/siginin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
