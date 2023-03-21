import React from "react";
import ReactDOM from "react-dom";
import SignInSide from "./components/SignInSide";
import SignUpSide from "./components/SignUpSide";
import Profile from './components/profile'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route exact path="/signup" element={<SignUpSide/> } />
        <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
