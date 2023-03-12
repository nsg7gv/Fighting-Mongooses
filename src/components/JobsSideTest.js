import { React, useEffect, useState } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, where } from "firebase/firestore"
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Battery1Bar } from '@mui/icons-material';
import Popup from './popup';

function JobsSide() {
  // Define state variables to manage form input and job data
  const [jobs, setJobs] = useState([]);
  const [courseID, setCourseID] = useState("");
  const [term, setTerm] = useState("");
  const [type, setType] = useState("");
  const [numPositions, setNumPosition] = useState("");
  const [state, setState] = useState("");

  //popup card 
  const [users, setUsers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // reference to the "backenddata" collection in Firestore
  const JobCollectionRef = collection(db, "backenddata");
  // reference to the "profile" collection in Firestore
  const UserCollectionRef = collection(db, "profile");

  useEffect(() => {
    getUserData();
  }, []);

  // Fetch data from Firestore and update the state variable "jobs"
  const getUserData = async () => {
    const data = await getDocs(UserCollectionRef);
    setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
  };

  // Use the useEffect hook to fetch data from Firestore when the component mounts
  useEffect(() => {
    getJobData();
  }, []);

  // Fetch data from Firestore and update the state variable "jobs"
  const getJobData = async () => {
    const data = await getDocs(JobCollectionRef);
    setJobs(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
  };

  /* This function may need to be used to find applicants to a specific job
  useEffect(() => {
    async function fetchUserProfiles() {
      const userProfiles = await getUserProfiles();
      setUsers(userProfiles);
    }
    fetchUserProfiles();
  }, []);

  const getUserProfiles = async () => {
    try {
      const userProfilesCollectionRef = collection(db, 'profile');
      const querySnapshot = await getDocs(userProfilesCollectionRef);
      const userProfiles = [];
      querySnapshot.forEach((doc) => {
        userProfiles.push({ id: doc.id, ...doc.data() });
      });
      return userProfiles;
    } catch (error) {
      console.error('Error retrieving user profiles: ', error);
      return null;
    }
  }*/

  // Add a new job to Firestore
  const createJob = async () => {
    await addDoc(JobCollectionRef, {
      Courseid: courseID,
      Term: term,
      Type: type,
      NumPositions: numPositions,
      State: state,
    });
    window.location.reload();
  };

  const handleUpdate = async () => {
    // Create an object with the updated data for the document
    const updatedData = {
      Courseid: courseID,
      Term: term,
      Type: type,
      NumPositions: numPositions,
      State: state,
    };
    // Call the updateJob function with the courseID and updated data
    await updateJob(courseID, updatedData);
  };

  // Define a function that updates a document in Firebase with the specified ID
  const updateJob = async (id, updatedData) => {
    try {
      // Query Firebase for documents that match the specified courseID
      const jobQuerySnapshot = await getDocs(
        query(JobCollectionRef, where("Courseid", "==", id))
      );
      // If there is at least one document that matches the query
      if (jobQuerySnapshot.docs.length > 0) {
        // Get the reference to the first document that matches the query
        const jobRef = jobQuerySnapshot.docs[0].ref;
        // Update the document with the updated data
        await updateDoc(jobRef, updatedData);
        console.log("Document successfully updated!");
      } else {
        console.log(`No job found with id ${id}`);
      }
      // Reload the page to show the updated data
      window.location.reload();
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  const handleDelete = async () => {
    await deleteJob(courseID);
  };

  const deleteJob = async (id) => {//delete a job with the selected courseid
    try {
      const jobQuerySnapshot = await getDocs(
        // Query Firebase for documents that match the specified courseID
        query(JobCollectionRef, where("Courseid", "==", id))
      );
      if (jobQuerySnapshot.docs.length > 0) {
        // If there is at least one document that matches the query
        await deleteDoc(jobQuerySnapshot.docs[0].ref);
        // delete the document
        console.log("Document successfully deleted!");
      } else {
        console.log(`No job found with id ${id}`);
      }
      window.location.reload();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  // Check user
  // Define an asynchronous function called "checkUser"
  const checkUser = async () => {

    await addDoc(JobCollectionRef, {
      Courseid: courseID,
      Term: term,
      Type: type,
      NumPositions: numPositions,
      State: state,
    });

    // Reload the page after the new document has been added
    window.location.reload();
  };
  return (
    <div className='split-screen'>
      <div className='split-screen-left' >
        <container fullWidth>
          <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2 style={{ textAlign: 'center' }}>Manage Jobs</h2>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={10}>
                  <TextField
                    variant='outlined'
                    size='medium'
                    fullWidth
                    name='courseID'
                    placeholder='*CourseID'
                    onChange={(event) => { setCourseID(event.target.value) }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={10}>
                  <TextField
                    variant='outlined'
                    size='medium'
                    fullWidth
                    name='term'
                    placeholder='Term'
                    onChange={(event) => { setTerm(event.target.value) }}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={10}>
                  <TextField
                    variant='outlined'
                    size='medium'
                    fullWidth
                    name='type'
                    placeholder='Type'
                    onChange={(event) => { setType(event.target.value) }}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={10}>
                  <TextField
                    variant='outlined'
                    size='medium'
                    fullWidth
                    name='numPositions'
                    placeholder='NumPositions'
                    onChange={(event) => { setNumPosition(event.target.value) }}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3} justify="center">
                <Grid item xs={12} sm={10}>
                  <TextField
                    variant='outlined'
                    size='medium'
                    fullWidth
                    name='state'
                    placeholder='State'
                    onChange={(event) => { setState(event.target.value) }}
                  />
                </Grid>
              </Grid>
            </div>
            <br></br>
            <button onClick={createJob} className="button">
              Create Job
            </button>
            <button onClick={handleUpdate} className="button">
              Update Job
            </button>
            <button onClick={handleDelete} className="button">
              Delete Job
            </button>
            <br /><br />
          </>
        </container>
      </div>
      <div className='split-screen-right'>
        <Container fullWidth>
          <h2 style={{ textAlign: 'center', marginRight: '175px' }}>Current Jobs</h2>
        </Container>

        {jobs.map(job => {
          return (
            <div className='hover:animate-pulse m-4 bg-gray-600 w-1/4 rounded-md p-2'>
              <Container component="main" maxWidth="xs">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={15}>
                    <table className='jobTable'>
                      <thead>
                        <tr>
                          <th>Course ID</th>
                          <th>Term</th>
                          <th>Type</th>
                          <th>Num Positions</th>
                          <th>State</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{job.Courseid}</td>
                          <td>{job.Term}</td>
                          <td>{job.Type}</td>
                          <td>{job.NumPositions}</td>
                          <td>{job.State}</td>
                          <td>
                            {/* Change the popup to show applicants*/} 
                            <button onClick={() => setShowPopup(true)}>Applicants</button>
                            <div>
                              {users.map((user) => (
                                <div key={user.id}>
                                  {showPopup && (
                                    <Popup title="Applicants" onClose={() => setShowPopup(false)}> 
                                    <p><strong>Email:</strong> {user.Email}</p>
                                      <p><strong>Name:</strong> {user.LName}, {user.FName}</p>
                                    </Popup>
                                  )}
                                </div>
                              ))}
                            </div>
                            
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Grid>
                </Grid>
              </Container>
              <br></br>
            </div>
          )
        })}
      </div>
    </div>
  );

}

export default JobsSide;