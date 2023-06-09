import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Feed } from './pages/Feed';
import { SignUp } from './pages/SignUp';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
