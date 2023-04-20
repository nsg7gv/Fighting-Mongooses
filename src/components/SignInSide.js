import React, { useState, useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./userInfo";
import { useNavigate } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from '../../src/assets/images/logo.jpeg';
import { db } from "./firebase-config";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

const Message = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"UMKC CS 451-R Project"}
  </Typography>
);

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  confirmationPopup: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
    backgroundColor: "rgba(0, 255, 0, 0.8)",
    borderRadius: "5px",
    padding: "10px 20px",
    color: "#fff"
  },
  errorPopup: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
    backgroundColor: "rgba(255, 0, 0, 0.8)",
    borderRadius: "5px",
    padding: "10px 20px",
    color: "#fff"
  }
  
  
}));

const SignInSide = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const navigate = useNavigate();


  const { setUser } = useContext(AuthContext);

    const signIn = async (event) => {
      event.preventDefault();

      const auth = getAuth();

      try {
        await signInWithEmailAndPassword(auth, email, password);

        const userQuery = query(collection(db, "profile"), where("Email", "==", email));
        const querySnapshot = await getDocs(userQuery);
        let userData = null;
    
        querySnapshot.forEach((doc) => {
          userData = doc.data();
        });
    
        if (userData) {
          console.log("User signed in:", userData);
          setLoggedIn(true);
          setShowConfirmation(true); // Show the confirmation message

          navigate('/');

    
          // Hide the confirmation message after 3 seconds
          setTimeout(() => {
            setShowConfirmation(false);
          }, 3000);
          
          // Set user data in the AuthContext
          setUser(userData);
        }
      } catch (error) {
        setError(error.message);
        console.error("Error signing in:", error);
        setShowErrorPopup(true); // Show the error popup

        // Hide the error popup after 3 seconds
        setTimeout(() => {
          setShowErrorPopup(false);
        }, 3000);
      }
    };
  

  

  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Grid container component="main" className={classes.root}>
      {showConfirmation && (
        <div className={classes.confirmationPopup}>User is logged in.</div>
      )}
      {showErrorPopup && (
  <div className={classes.errorPopup}>Invalid email or password.</div>
)}
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={signIn}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Message />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignInSide;
