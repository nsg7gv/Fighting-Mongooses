import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#296BBD'
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  }
}));

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Passwords do not match!')
    }
    try{
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch{
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        </Avatar>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          {/* {JSON.stringify(currentUser)} */}
          {/* {currentUser.email} */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <Form.Group id="email">
              <Form.Label className="mt-3">Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            </Grid>
            <Grid item xs={12}>
            <Form.Group id="password">
              <Form.Label className="mt-3">Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            </Grid>
            <Grid item xs={12}>
            <Form.Group id="password-confirm">
              <Form.Label className="mt-3">Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            </Grid>
            </Grid>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
     
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to ="/signIn">Sign In</Link>
      </div>
      </div>
      </Container>

  );
};

export default Signup;
