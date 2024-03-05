import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { createContext, useState } from 'react';
import Home from './pages/Home';
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
        <Route path="/logout" element={<div>home</div>} />
        <Route path="/siginin" element={<div>home</div>} />
        <Route path="/login" element={<div>home</div>} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
