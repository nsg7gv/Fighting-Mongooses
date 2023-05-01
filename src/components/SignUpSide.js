import { React, useEffect, useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, where, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Message() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"UMKC CS 451-R Project"}
    </Typography>
  );
}

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
    backgroundColor: "#296BBD"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignUp() {

  const classes = useStyles();
  // Define state variables to manage form input and job data
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // reference to the "profile" collection in Firestore
  const UserCollectionRef = collection(db, "profile");
  const auth = getAuth();

  useEffect(() => {
    getUserData();
  }, []);

  // Fetch data from Firestore and update the state variable "jobs"
  const getUserData = async () => {
    const data = await getDocs(UserCollectionRef);
    setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
  };

  // Add a new job to Firestore
  const createUser = async () => {
    try {
      // Query Firebase for documents that match the specified email
      const emailQuerySnapshot = await getDocs(
        query(UserCollectionRef, where("Email", "==", email))
      );
      if (emailQuerySnapshot.docs.length === 0) {
        // Create a new user in Firebase Authentication with the email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Add a new document to Firestore with the email as the document ID
        await setDoc(doc(UserCollectionRef, email), {
          Fname: firstName,
          Lname: lastName,
          Email: email,
          "CTACert":false,
          "GPA": 3.8,
          "GradSem":"Fall",
          "GradYear":"2030",
          "IDnum":"12345678",
          "IsAdmin":false,
          "Level":"BS",
          "Major":"CS",
          "Type":"student",
          "CS 101": "",
        "CS 101L": "",
        "CS 191": "",
        "CS 201R": "",
        "CS 201L": "",
        "CS 291": "",
        "CS 303": "",
        "CS 320": "",
        "CS 349": "",
        "CS 394R": "",
        "CS 404": "",
        "CS 441": "",
        "CS 449": "",
        "CS 456": "",
        "CS 457": "",
        "CS 458": "",
        "CS 461": "",
        "CS 465R": "",
        "CS 5520": "",
        "CS 5525": "",
        "CS 5552A": "",
        "CS 5565": "",
        "CS 5573": "",
        "CS 5590PA": "",
        "CS 5592": "",
        "CS 5596A": "",
        "CS 5596B": "",
        "ECE 216": "",
        "ECE 226": "",
        "ECE 228": "",
        "ECE 241": "",
        "ECE 276": "",
        "ECE 302": "",
        "ECE 330": "",
        "ECE 341R": "",
        "ECE 428R": "",
        "ECE 458": "",
        "ECE 466": "",
        "ECE 477": "",
        "ECE 486": "",
        "ECE 5558": "",
        "ECE 5560": "",
        "ECE 5567": "",
        "ECE 5577": "",
        "ECE 5578": "",
        "ECE 5586": "",
        "IT 222": "",
        "IT 321": "",
        });

        // Reload the page after the new document has been added
        window.location.reload();
      } else {
        alert(`A user with email ${email} already exists.`);
      }
    } catch (error) {
      console.error("Error creating user: ", error);
    }
  };
  

  // Check user
  // Define an asynchronous function called "checkUser"
  const checkUser = async () => {
    try {
      const emailQuerySnapshot = await getDocs(
        query(UserCollectionRef, where("Email", "==", email))
      );
      if (emailQuerySnapshot.docs.length === 0) {
        // Add a new document with the email as the document ID
        await setDoc(doc(UserCollectionRef, email), {
          Fname: firstName,
          Lname: lastName,
          Email: email,
        });

        // Reload the page after the new document has been added
        window.location.reload();
      } else {
        alert(`A user with email ${email} already exists.`);
      }
    } catch (error) {
      console.error("Error creating document: ", error);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Fname"
                variant="outlined"
                required
                fullWidth
                id="Fname"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={(event) => { setFirstName(event.target.value) }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lname"
                name="Lname"
                variant="outlined"
                required
                fullWidth
                id="Lname"
                label="Last Name"
                value={lastName}
                onChange={(event) => { setLastName(event.target.value) }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                name="Email"
                variant="outlined"
                required
                fullWidth
                id="Email"
                label="Email Address"
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="current-password"
                name="password"
                variant="outlined"
                required
                fullWidth
                type="password"
                id="password"
                label="Password"
                value={password}
                onChange={(event) => { setPassword(event.target.value) }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={createUser}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
      </div>
      <Box mt={5}>
        <Message />
      </Box>
    </Container>
  );
  
}
export default SignUp;