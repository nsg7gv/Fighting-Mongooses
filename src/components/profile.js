import { React, useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, where } from "firebase/firestore"
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


const Profile = () => {
//   const userEmail = 'sam@umkc.edu';
  const userEmail = 'luke@umkc.edu';
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Searching')
    db.collection('profile').doc(userEmail).get()
      .then(doc => {
        if (doc.exists) {
            console.log('Found Doc')
            setData(doc.data());
        } else {
          console.log('No such document!');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <div>
        <div>
            <h2>User Info:</h2>
            <p>Student Name: {data.LName}, {data.FName}</p>
            <p>Email Address: {data.Email}</p>
            <p>Student ID Number: {data.IDnum}</p>
            <p>Graduation: {data.GradSem} {data.GradYear}</p>
            <p>Current GPA: {data.GPA}</p>
        </div>
        <br></br>
        <div>
            <h2>Grades</h2><button>Edit Grades</button>
            <p>CS 101: {data.cs101}</p>
            <p>CS 191: {data.cs191}</p>
            <p>CS 201: {data.cs201}</p>
        </div>
    </div>
  );
};


export default Profile