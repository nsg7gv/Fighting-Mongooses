import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../../src/assets/images/logo.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#296BBD",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signIn(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <h2 className="text-center mb-4">Sign in</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className={classes.form}>
            <Form.Group id="email">
              <Form.Label className="mt-3">Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="mt-3">Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Sign in
            </Button>
          </Form>

          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Create one!</Link>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
