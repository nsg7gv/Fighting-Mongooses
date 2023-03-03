import { useEffect, useState } from 'react';
import {db} from './firebase-config';
import {collection,getDocs, addDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Table as table } from '@material-ui/core';

function JobsSide() {
    const [jobs, setJobs] = useState([])
    const [courseID, setCourseID] = useState("");
    const [term, setTerm] = useState("");
    const [type, setType] = useState("");
    const [numPositions, setNumPosition] = useState("");
    const [state, setState] = useState("");
    const UsersCollectionRef = collection(db, "backenddata")
  
    useEffect(() => {
      const getUsersData = async () => {
        const data = await getDocs(UsersCollectionRef)
        setJobs(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
      }
  
      getUsersData()
    }, [])
  
    const CreateUser = async () => {
      await addDoc(UsersCollectionRef, { Courseid: courseID, Term : term, Type : type, NumPositions : numPositions, State : state})
    }
  
    const CheckUser = async () => {
      await addDoc(UsersCollectionRef, { Courseid: courseID, Term : term, Type : type, NumPositions : numPositions, State : state})
      window.location.reload()
    }
  
    const updateDB = async (id, courseID) => {
      const userDoc = doc(db, "backenddata", id)
      const NewDoc = { Courseid: courseID, Term : term,Type : type, NumPositions : numPositions, State : state}
      console.log("Updated the Data on System")
      await updateDoc(userDoc,NewDoc)
      console.log("Updated the Data on the Server")
      window.location.reload()
    }
  
  
  
    return (
        <Container component="main" maxWidth="xs">
      <div className="Jobs">
        <Typography component="h1" variant="h5">
          Admin Job Page
        </Typography>
            <Grid container spacing={2}>
                
                <Grid item xs={12} sm={15}>
                    <TextField
                    name='courseID'
                    placeholder='CourseID'
                    onChange={(event) => { setCourseID(event.target.value)}}
                    />
                    </Grid>
            </Grid>
                <br/><br/>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={15}>
                <TextField
                  name='term'
                  placeholder='Term'
                  onChange={(event) => { setTerm(event.target.value)}}
                />
                
                <br/><br/>
                </Grid>
            </Grid>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={15}>
                <TextField
                  name='type'
                  placeholder='Type'
                  onChange={(event) => { setType(event.target.value)}}
                />
                <br/><br/>
                </Grid>
            </Grid>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={15}>
                <TextField
                  name='numPositions'
                  placeholder='NumPositions'
                  onChange={(event) => { setNumPosition(event.target.value)}}
                />
                <br/><br/>
                </Grid>
            </Grid>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={15}>
                <TextField
                  name='state'
                  placeholder='State'
                  onChange={(event) => { setState(event.target.value)}}
                />
                <br/><br/>
                </Grid>
            </Grid>
                <button onClick={CreateUser}>Add to DB</button>
                <button onClick={updateDB}>Update DB</button>
                <br/><br/>
                <Typography component="h1" variant="h5">
          Current Jobs
          
        </Typography>
        <div className='grid grid-cols-2'>
        <Container component="main" maxWidth="xs">
                     <Grid container spacing={2}>
                <Grid item xs={12} sm={15}>
                    <table>
                <theader>
            <th className='w-auto text-center'>Course ID</th>
            <th className='w-auto text-center'>Term</th>
            <th className='w-auto text-center'>State</th>
            <th className='w-auto text-center'>Type</th>
            <th className='w-auto text-center'>State</th>
            </theader>
            </table>
            </Grid>
            </Grid>
            </Container>
                            <br></br>
            {jobs.map(user => {
                return <div className='hover:animate-pulse m-4 bg-gray-600 w-1/4 rounded-md p-2'>
                    <Container component="main" maxWidth="xs">
                     <Grid container spacing={2}>
                <Grid item xs={12} sm={15}>
                    <table class = "jobTable">
                        <tbody>
                            <td className='w-auto text-center'>{user.Courseid}</td>
                            <td className='w-auto text-center'>{user.Term}</td>
                            <td className='w-auto text-center'>{user.Type}</td>
                            <td className='w-auto text-center'>{user.NumPositions}</td>
                            <td className='w-auto text-center'>{user.State}</td>
                        </tbody>
                    </table>
                    </Grid>
            </Grid>
            </Container>
                </div>
            })}
        </div>
      
        </div>
        </Container>
    );
        }
  
  export default JobsSide;