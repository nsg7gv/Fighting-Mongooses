import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SignInSide from './components/SignInSide';
import SignUpSide from './components/SignUpSide';
import Profile from './components/profile';
import Welcome from './components/Welcome';
import JobsSideTest from './components/JobsSideTest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserContext from './components/UserContext';
import './styles.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route exact path="/signin" element={<SignInSide />} />
            <Route exact path="/signup" element={<SignUpSide />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/admin" element={<JobsSideTest />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
