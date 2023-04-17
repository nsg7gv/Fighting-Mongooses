import React from "react";
import ReactDOM from "react-dom";
import SignInSide from "./components/SignInSide";
import SignUpSide from "./components/SignUpSide";
import Profile from './components/profile';
import Welcome from './components/Welcome';
import JobsSideTest from "./components/JobsSideTest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/userInfo'; // Update the import statement

import "./styles.css";

function App() {
  return (
    <Router>
    <div className="App">
      <AuthProvider> {/* Wrap your Routes with AuthProvider */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route exact path="/signin" element={<SignInSide />} />
          <Route exact path="/signup" element={<SignUpSide />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/admin" element={<JobsSideTest />} />
        </Routes>
      </AuthProvider>
    </div>
  </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
