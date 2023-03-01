import { useEffect, useState } from 'react';
import {db} from './firebase-config';
import {collection,getDocs, addDoc, doc, updateDoc} from "firebase/firestore"

function JobsSide() {
  const [users, setUsers] = useState([])
  const [courseID, setCourseID] = useState([]);
  const [term, setTerm] = useState("");
  const [type, setType] = useState([]);
  const [numPositions, setNumPosition] = useState("");
  const [description, setDescription] = useState(0);
  const [state, setState] = useState([]);
  const UsersCollectionRef = collection(db, "backenddata")

  useEffect(() => {
    const getUsersData = async () => {
      const data = await getDocs(UsersCollectionRef)
      setCourseID(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
      setTerm(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
      setType(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
      setNumPosition(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
      setState(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))

    }

    getUsersData()
  }, [])

  const CreateUser = async () => {
    await addDoc(UsersCollectionRef, { Courseid: courseID, Term : term, Type : type, NumPositions : numPositions, Description : description, State : state})
  }

  const CheckUser = async () => {
    await addDoc(UsersCollectionRef, { Courseid: courseID, Term : term, Type : type, NumPositions : numPositions, Description : description, State : state})
    window.location.reload()
  }

  const updateDB = async (id, courseID,term,type,numPositions,description,state) => {
    const userDoc = doc(db, "backenddata", id)
    const NewDoc = { Courseid: courseID, Term : term,Type : type, NumPositions : numPositions, Description : description, State : state}
    console.log("Updated the Data on System")
    await updateDoc(userDoc,NewDoc)
    console.log("Updated the Data on the Server")
    window.location.reload()
  }



  return (
    <div className="Jobs">
              <input
                name='courseID'
                placeholder='CourseID'
                onChange={(event) => { setCourseID(event.target.value)}}
              />
              <input
                name='term'
                placeholder='Term'
                onChange={(event) => { setTerm(event.target.value)}}
              />
              <input
                name='type'
                placeholder='Type'
                onChange={(event) => { setType(event.target.value)}}
              />
              <input
                name='numPositions'
                placeholder='NumPositions'
                onChange={(event) => { setNumPosition(event.target.value)}}
              />
              <input
                name='state'
                placeholder='State'
                onChange={(event) => { setState(event.target.value)}}
              />
      <button onClick={CreateUser}>Add To DB</button>
      {users.map(user => {

      <button onClick={() => {updateDB(user.courseID,user.term,user.name,user.type,user.numPositions,user.description, user.state)}}>Update DB</button>
      })}
    
      </div>
  );
      }

export default JobsSide;