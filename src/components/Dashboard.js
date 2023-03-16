import React, { useState } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(2),
      flexDirection: "column",
      alignItems: "center",
      
    }
  }));

function Dashboard() {
  const [error, setError] = useState("");
  const {currentUser, logout} = useAuth();
  const navigate = useNavigate();
  const classes = useStyles();

  async function handleLogout(){
    setError('');

    try{
      await logout();
      navigate('/login');
    }catch{
      setError("Failed to log out");
    }
  }

  return (
    <Container component="main" maxWidth="xs">
        <Card.Body>
        <div className={classes.paper}>
          <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong >User Email: </strong> {currentUser.email}
          <Link to ="#" className="btn btn-primary w-100 mt-3">Update Profile</Link>
          </div>
        </Card.Body>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </div>
      </Container>
    
  )
}

export default Dashboard