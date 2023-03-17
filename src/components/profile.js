import * as React from 'react'
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, where } from "firebase/firestore"
import { Typography, Container, Grid, Card, CardActions, CardContent, TextField, CssBaseline, Divider, Button, Popover, PaperProps } from "@material-ui/core";

const getOptions = () => {
    return [
      { value: '', label: 'Select a grade' },
      { value: 'A', label: 'Grade A' },
      { value: 'A-', label: 'Grade A-' },
      { value: 'B+', label: 'Grade B+' },
      { value: 'B', label: 'Grade B' },
      { value: 'B-', label: 'Grade B-' },
      { value: 'C+', label: 'Grade C+' },
      { value: 'C', label: 'Grade C' },
      { value: 'C-', label: 'Grade C-' },
      { value: 'F', label: 'Grade F' },
      { value: 'W', label: 'Withdrawn' },
      { value: 'Drop', label: 'Dropped' },
    ];
  };

const Profile = () => {
//   const userEmail = 'sam@umkc.edu';
    const userEmail = 'luke@umkc.edu';
    const [data, setData] = useState([]); //Firestore Document


    const [eceAnchor, seteceAnchor] = useState(null)
    const closeECEAnchor = () => {
        seteceAnchor(null);
    };
    const editGradeECE = (event) => {
        seteceAnchor(event.currentTarget);
    }


    const options = getOptions(); //Drop down menu

    // Class grade states
    const [ece216, setECE216] = useState(null);

    const handleChangeECE216 = async (event) => {
        let {value} = event.target
        console.log(value)
        console.log(userEmail)
        console.log('Starting');

        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece216: 'new' }).then(() => {
          console.log('updated')
        });        

    //     await updateDoc(data, value);
    //     console.log("Document successfully updated!");
    //   };
    };

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
    <>
        <CssBaseline />
        <main>
            <div>
                <Container maxWidth='lg'>
                    <Typography variant='h4' align='center' color='textprimary' gutterBottom='true'>
                        Student Information:
                    </Typography>
                    <Divider variant='inset' />
                    <Grid container spacing={5} justifyContent='center' columns={5}>
                        <Grid item>
                            <Typography variant='p' align='center' color='textSecondary' paragraph>
                                <p>Student Name: {data.LName}, {data.FName}</p>
                                <p>UMKC Email: {data.Email}</p>
                                <p>Student ID: {data.IDnum}</p>
                                <p>Major: {data.Major}</p>
                                <p>Current Level: {data.Level}</p>
                                <p>Graduation: {data.GradSem} {data.GradYear}</p>
                                <p>Current GPA: {data.GPA}</p>
                            </Typography>
                        </Grid>
                            <Grid button justifyContent='right'>
                                <br></br>
                                <Button variant="outlined" size='small'> Edit</Button>
                            </Grid>
                    </Grid>
                </Container>

                <br></br>
                <br></br>

                <Container>
                    <Typography variant='h4' align='center' color='textprimary' gutterBottom='true'>
                            Grades:
                        </Typography>
                        <Divider variant='inset'/>
                        <div>
                            <Grid container spacing={5} justifyContent='center' columns={5}>
                                <Grid item>
                                    <Typography variant='p' align='right' color='textSecondary' paragraph>
                                        <p>CS 101:  {data.cs101}</p>
                                        <p>CS 101L:  {data.cs101l}</p>
                                        <p>CS 191:  {data.cs191}</p> 
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='p' align='right' color='textSecondary' paragraph>
                                        <p>CS 201R: {data.cs201r}</p>
                                        <p>CS 201L: {data.cs201l}</p>
                                        <p>CS 291: {data.cs291}</p> 
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='p' align='right' color='textSecondary' paragraph>
                                        <p>CS 303: {data.cs303}</p>
                                        <p>CS 320: {data.cs320}</p>
                                        <p>CS 349: {data.cs349}</p>
                                        <p>CS 394R: {data.cs394r}</p>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='p' align='right' color='textSecondary' paragraph>
                                        <p>CS 404: {data.cs404}</p>
                                        <p>CS 441: {data.cs441}</p>
                                        <p>CS 449: {data.cs449}</p>
                                        <p>CS 456: {data.cs456}</p>
                                        <p>CS 457: {data.cs457}</p>
                                        <p>CS 458: {data.cs458}</p> 
                                        <p>CS 461: {data.cs461}</p>
                                        <p>CS 465R: {data.cs465r}</p>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='p' align='right' color='textSecondary' paragraph>
                                        <p>CS 5520: {data.cs5520}</p>
                                        <p>CS 5525: {data.cs5525}</p>
                                        <p>CS 5552A: {data.cs5552a}</p>
                                        <p>CS 5565: {data.cs5565}</p>
                                        <p>CS 5573: {data.cs5573}</p>
                                        <p>CS 5590PA: {data.cs5590pa}</p> 
                                        <p>CS 5592: {data.cs5592}</p>
                                        <p>CS 5596A: {data.cs5596a}</p>
                                        <p>CS 5596B: {data.cs5596b}</p> 
                                    </Typography>
                                </Grid>
                                <Grid button justifyContent='right'>
                                    <br></br>
                                    <Button variant="outlined" size='small'> Edit</Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={5} justifyContent='center' columns={5}>
                                <Grid item>
                                    <Typography variant='p' align='right' color='textSecondary' paragraph>
                                        <p>ECE 216: {data.ece216}</p>
                                        <p>ECE 226: {data.ece226}</p>
                                        <p>ECE 228: {data.ece228}</p> 
                                        <p>ECE 241: {data.ece241}</p>
                                        <p>ECE 276: {data.ece276}</p> 
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='p' align='right' color='textSecondary' paragraph>
                                        <p>ECE 302: {data.ece302}</p>
                                        <p>ECE 330: {data.ece330}</p>
                                        <p>ECE 341R: {data.ece341r}</p> 
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='p' align='right' color='textSecondary' paragraph>
                                        <p>ECE 428R: {data.ece428r}</p>
                                        <p>ECE 458: {data.ece458}</p>
                                        <p>ECE 466: {data.ece466}</p> 
                                        <p>ECE 477: {data.ece477}</p>
                                        <p>ECE 486: {data.ece486}</p> 
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='p' align='right' color='textSecondary' paragraph>
                                        <p>ECE 5558: {data.ece558}</p>
                                        <p>ECE 5560: {data.ece5560}</p>
                                        <p>ECE 5567: {data.ece5567}</p> 
                                        <p>ECE 5577: {data.ece5577}</p>
                                        <p>ECE 5578: {data.ece5578}</p> 
                                        <p>ECE 5586: {data.ece5586}</p> 
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='p' align='right' color='textSecondary' paragraph>
                                        <p>IT 222: {data.it222}</p>
                                        <p>IT 321: {data.it321}</p>
                                    </Typography>
                                </Grid>

                                {/* Popover actions */}

                                <Grid button justifyContent='right'>
                                    <br></br>
                                    <Button variant="contained" onClick={editGradeECE}>Edit</Button>
                                    <Popover 
                                    open={Boolean(eceAnchor)} 
                                    anchorEl={eceAnchor} 
                                    anchorOrigin={{
                                        vertical: 'bottom', 
                                        horizontal: 'right'}}
                                    transformOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    }}>
                                        <Typography variant='p'>
                                            <div style={{
                                                width: '600px',
                                                height: '400px'
                                            }}>
                                                <Grid container spacing={5} justifyContent='center' columns={5}>
                                                    <Grid item>
                                                        <Typography variant='p' align='justify' color='textSecondary' paragraph fontSize= "6">
                                                            <p>ECE 216: </p>
                                                            <select onChange={handleChangeECE216}>
                                                                {options.map((option) => (
                                                                    <option key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </option>
                                                            ))}</select>
                                                            <p>ECE 226: {data.cs191}</p>
                                                            <p>ECE 228: {data.cs201}</p> 
                                                            <p>ECE 241: {data.cs191}</p>
                                                            <p>ECE 276: {data.cs201}</p> 
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant='p' align='justify' color='textSecondary' paragraph>
                                                            <p>ECE 302: {data.cs101}</p>
                                                            <p>ECE 330: {data.cs191}</p>
                                                            <p>ECE 341R: {data.cs201}</p> 
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant='p' align='justify' color='textSecondary' paragraph>
                                                            <p>ECE 428R: {data.cs101}</p>
                                                            <p>ECE 458: {data.cs191}</p>
                                                            <p>ECE 466: {data.cs201}</p> 
                                                            <p>ECE 477: {data.cs191}</p>
                                                            <p>ECE 486: {data.cs201}</p> 
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant='p' align='justify' color='textSecondary' paragraph>
                                                            <p>ECE 5558: {data.cs101}</p>
                                                            <p>ECE 5560: {data.cs191}</p>
                                                            <p>ECE 5567: {data.cs201}</p> 
                                                            <p>ECE 5577: {data.cs191}</p>
                                                            <p>ECE 5578: {data.cs201}</p> 
                                                            <p>ECE 5586: {data.cs201}</p> 
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant='p' align='justify' color='textSecondary' paragraph>
                                                            <p>IT 222: {data.cs101}</p>
                                                            <p>IT 321: {data.cs191}</p>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid button justifyContent='right'>
                                                        <br></br>
                                                        <Button variant="contained" onClick={closeECEAnchor}> Sumbit</Button>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </Typography>
                                    </Popover>
                                </Grid>
                            </Grid>
                        </div>
                </Container>

                <br></br>
                <br></br>

                <Container maxWidth='lg'>
                    <Typography variant='h4' align='center' color='textprimary' gutterBottom='true'>
                        Files:
                    </Typography>
                    <Divider variant='inset' />
                </Container>
            </div>
        </main>

    </>
  );
};


export default Profile