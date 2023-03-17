import React from "react";
import ReactDOM from "react-dom";
import SignInSide from "./components/SignInSide";
import SignUpSide from "./components/SignUpSide";
import JobsSideTest from "./components/JobsSideTest";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" exact element={<JobsSideTest/>} />
        <Route exact path="/signin" element={<SignInSide/> } />
        <Route exact path="/signup" element={<SignUpSide/> } />
        </Routes>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
