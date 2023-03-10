import { useEffect, useState } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, where } from "firebase/firestore"
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Battery1Bar } from '@mui/icons-material';

function JobsSide() {
  // Define state variables to manage form input and job data
  const [jobs, setJobs] = useState([]);
  const [courseID, setCourseID] = useState("");
  const [term, setTerm] = useState("");
  const [type, setType] = useState("");
  const [numPositions, setNumPosition] = useState("");
  const [state, setState] = useState("");

  // Define a reference to the "backenddata" collection in Firestore
  const UsersCollectionRef = collection(db, "backenddata");

  // Use the useEffect hook to fetch data from Firestore when the component mounts
  useEffect(() => {
    getUsersData();
  }, []);

  // Fetch data from Firestore and update the state variable "jobs"
  const getUsersData = async () => {
    const data = await getDocs(UsersCollectionRef);
    setJobs(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
  };

  // Add a new job to Firestore
  const createJob = async () => {
    await addDoc(UsersCollectionRef, {
      Courseid: courseID,
      Term: term,
      Type: type,
      NumPositions: numPositions,
      State: state,
    });
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
        query(UsersCollectionRef, where("Courseid", "==", id))
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
        query(UsersCollectionRef, where("Courseid", "==", id))
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
    // Use the "addDoc" function to add a new document to the "UsersCollectionRef" collection in Firestore
    // The new document will contain the values of the "courseID", "term", "type", "numPositions", and "state" variables
    await addDoc(UsersCollectionRef, {
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
              <h2 style={{ textAlign: 'center' }}>Edit Jobs</h2>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={10}>
                  <TextField
                    variant='outlined'
                    size='medium'
                    fullWidth
                    name='courseID'
                    placeholder='CourseID'
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
            <button onClick={createJob} className="button">
              Add to DB
            </button>
            <button onClick={handleUpdate} className="button">
              Update User
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

        {jobs.map(user => {
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
                          <td>{user.Courseid}</td>
                          <td>{user.Term}</td>
                          <td>{user.Type}</td>
                          <td>{user.NumPositions}</td>
                          <td>{user.State}</td>
                          <td>
                            <button>View</button> {/* todo add function */}
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