import React from "react";
import Signup from "./Signup";
import SignIn from './SignIn';
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      > */}
        {/* <div className="w-100" style={{ maxWidth: "400px" }}> */}
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signIn" element={<SignIn />} />
              </Routes>
            </AuthProvider>
          </Router>
      
    </div>
  );
}

export default App;
