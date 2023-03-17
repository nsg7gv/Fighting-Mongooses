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
      { value: 'WD', label: 'Withdrawn' },
      { value: 'DROP', label: 'Dropped' },
      { value: ' ', label: 'Remove Grade'}
    ];
  };

const Profile = () => {
//   const userEmail = 'sam@umkc.edu';
    const userEmail = 'luke@umkc.edu';
    const [data, setData] = useState([]); //Firestore Document

    const [studentAnchor, setStudentAnchor] = useState(null)
    const closeStudentAnchor = () => {
        setStudentAnchor(null);
        window.location.reload();
    };
    const editStudent = (event) => {
        setStudentAnchor(event.currentTarget);
    }

    const [csAnchor, setCSAnchor] = useState(null)
    const closecsAnchor = () => {
        setCSAnchor(null);
        window.location.reload();
    };
    const editGradeCS = (event) => {
        setCSAnchor(event.currentTarget);
    }

    const [eceAnchor, seteceAnchor] = useState(null)
    const closeECEAnchor = () => {
        seteceAnchor(null);
        window.location.reload();
    };
    const editGradeECE = (event) => {
        seteceAnchor(event.currentTarget);
    }


    const options = getOptions(); //Drop down menu

{/* CS Edit */}
    const handleChangeCS101 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs101: value }).then(() => {});        
};

    const handleChangeCS101L = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs101l: value }).then(() => {});        
    };

    const handleChangeCS191 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs191: value }).then(() => {});        
    };
 
    const handleChangeCS201 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs201: value }).then(() => {});        
    };
 
    const handleChangeCS201L = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs201l: value }).then(() => {});        
    };
 
    const handleChangeCS291 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs291: value }).then(() => {});        
    };
 
    const handleChangeCS303 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs303: value }).then(() => {});        
    };
 
    const handleChangeCS320 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs320: value }).then(() => {});        
    };
 
    const handleChangeCS349 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs349: value }).then(() => {});        
    };
 
    const handleChangeCS394R = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs394r: value }).then(() => {});        
    };
 
    const handleChangeCS404 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs404: value }).then(() => {});        
    };
 
    const handleChangeCS441 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs441: value }).then(() => {});        
    };
 
    const handleChangeCS449 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs449: value }).then(() => {});        
    };
 
    const handleChangeCS456 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs465: value }).then(() => {});        
    };
 
    const handleChangeCS457 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs457: value }).then(() => {});        
    };
 
    const handleChangeCS458 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs458: value }).then(() => {});        
    };
 
    const handleChangeCS461 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs461: value }).then(() => {});        
    };
 
    const handleChangeCS465R = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs465r: value }).then(() => {});        
    };
 
    const handleChangeCS5520 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs5520: value }).then(() => {});        
    };
 
    const handleChangeCS5525 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs5525: value }).then(() => {});        
    };
 
    const handleChangeCS5552A = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs5552a: value }).then(() => {});        
    };
 
    const handleChangeCS5565 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs5565: value }).then(() => {});        
    };
 
    const handleChangeCS5573 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs5573: value }).then(() => {});        
    };
 
    const handleChangeCS5590PA = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs5590pa: value }).then(() => {});        
    };
 
    const handleChangeCS5592 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs5592: value }).then(() => {});        
    };
 
    const handleChangeCS5596A = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs5596a: value }).then(() => {});        
    };
 
    const handleChangeCS5596B = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ cs5596b: value }).then(() => {});        
    }; 


{/* ECE Edit */}
    const handleChangeECE216 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece216: value }).then(() => {});        
    };

    const handleChangeECE226 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece226: value }).then(() => {});        
    };

    const handleChangeECE228 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece228: value }).then(() => {});        
    };

    const handleChangeECE241 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece241: value }).then(() => {});        
    };

    const handleChangeECE276 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece276: value }).then(() => {});        
    };

    const handleChangeECE302 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece302: value }).then(() => {});        
    };

    const handleChangeECE330 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece330: value }).then(() => {});        
    };

    const handleChangeECE341r = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece341r: value }).then(() => {});        
    };

    const handleChangeECE428r = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece428r: value }).then(() => {});        
    };
 
    const handleChangeECE458 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece458: value }).then(() => {});        
    };
 
    const handleChangeECE466 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece466: value }).then(() => {});        
    };
 
    const handleChangeECE486 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece486: value }).then(() => {});        
    };
 
    const handleChangeECE477 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece477: value }).then(() => {});        
    };
 
    const handleChangeECE5558 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece5558: value }).then(() => {});        
    };
 
    const handleChangeECE5560 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece5560: value }).then(() => {});        
    };
 
    const handleChangeECE5567 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece5567: value }).then(() => {});        
    };
 
    const handleChangeECE5577 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece5577: value }).then(() => {});        
    };
 
    const handleChangeECE5578 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece5578: value }).then(() => {});        
    };
 
    const handleChangeECE5586 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ ece5586: value }).then(() => {});        
    };
 
    const handleChangeIT222 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ it222: value }).then(() => {});        
    };
 
    const handleChangeIT321 = async (event) => {
        let {value} = event.target
        const docRef = db.collection('profile').doc(userEmail);
        docRef.update({ it321: value }).then(() => {});        
    };
 
 {/**/}   
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
{/*  Profile section */}
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
                                <br></br>
                                <Button variant="contained" onClick={editStudent}>Edit</Button>
                            </Grid>
                    </Grid>
                </Container>

                <br></br>
                <br></br>

{/*  Grade section */}
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
                                    <br></br>
                                    <Button variant="contained" onClick={editGradeCS}>Edit</Button>
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
                                        <p>ECE 5558: {data.ece5558}</p>
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
                                <Grid>
                                    <br></br>
                                    <br></br>
                                    <Button variant="contained" onClick={editGradeECE}>Edit</Button>
                                </Grid>

{/* Popover Section Profile */}
    <Grid>
        <Popover
            open={Boolean(csAnchor)} 
            anchorEl={csAnchor} 
            anchorOrigin={{
                vertical: 'bottom', 
                horizontal: 'right'}}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}>
            <Typography variant='p'>
                 <div style={{
                     width: '825px',
                     height: '800px'
                 }}>
                    <Grid container spacing={5} justifyContent='center' columns={5}>
                        <Grid item>
                            <Typography variant='p' align='justify' color='textSecondary' paragraph fontSize= "6">

                            </Typography>
                        </Grid>
                        <Grid button justifyContent='right'>
                            <br></br>
                            <Button variant="contained" onClick={closeStudentAnchor}> Close </Button>
                        </Grid>

                    </Grid>
                </div>

            </Typography>
        </Popover>

    </Grid>


 {/* Popover Section CS */}
    <Grid button justifyContent='right'>
        <Popover 
            open={Boolean(csAnchor)} 
            anchorEl={csAnchor} 
            anchorOrigin={{
                vertical: 'bottom', 
                horizontal: 'right'}}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}>
            <Typography variant='p'>
                <div style={{
                    width: '825px',
                    height: '800px'
                }}>
                    <Grid container spacing={5} justifyContent='center' columns={5}>
                        <Grid item>
                            <Typography variant='p' align='justify' color='textSecondary' paragraph fontSize= "6">

                                <p>CS 101: {data.CS101}</p>
                                <select onChange={handleChangeCS101}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select>

                                <p>CS 101L: {data.cs101l}</p>
                                <select onChange={handleChangeCS101L}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select>

                                <p>CS 191: {data.cs191}</p>
                                <select onChange={handleChangeCS191}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='p' align='justify' color='textSecondary' paragraph>
                                <p>CS 201: {data.cs201}</p>
                                <select onChange={handleChangeCS201}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 201L: {data.cs201l}</p>   
                                    <select onChange={handleChangeCS201L}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 291: {data.cs291}</p> 
                                <select onChange={handleChangeCS291}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='p' align='justify' color='textSecondary' paragraph>
                                <p>CS 303: {data.cs303}</p>
                                <select onChange={handleChangeCS303}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 320: {data.cs320}</p>
                                <select onChange={handleChangeCS320}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 
                                
                                <p>CS 349: {data.cs349}</p> 
                                <select onChange={handleChangeCS349}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 394R: {data.cs394r}</p>
                                <select onChange={handleChangeCS394R}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='p' align='justify' color='textSecondary' paragraph>
                                <p>CS 404: {data.cs404}</p>
                                <select onChange={handleChangeCS404}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 441: {data.cs441}</p>
                                <select onChange={handleChangeCS441}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 449: {data.cs449}</p> 
                                <select onChange={handleChangeCS449}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 456: {data.cs465}</p>
                                <select onChange={handleChangeCS456}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 457: {data.cs457}</p> 
                                <select onChange={handleChangeCS457}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 458: {data.cs458}</p> 
                                <select onChange={handleChangeCS458}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 461: {data.cs461}</p> 
                                <select onChange={handleChangeCS461}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 465R: {data.cs465r}</p> 
                                <select onChange={handleChangeCS465R}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='p' align='justify' color='textSecondary' paragraph>
                                <p>CS 5520: {data.cs5520}</p>
                                <select onChange={handleChangeCS5520}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 5525: {data.cs5525}</p>
                                <select onChange={handleChangeCS5525}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                                <p>CS 5552A: {data.cs5552a}</p>
                                <select onChange={handleChangeCS5552A}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 
                                    
                                    <p>CS 5565: {data.cs5565}</p>
                                <select onChange={handleChangeCS5565}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 
                                    
                                    <p>CS 5573: {data.cs5573}</p>
                                <select onChange={handleChangeCS5573}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 
                                    
                                    <p>CS 5590PA: {data.cs5590pa}</p>
                                <select onChange={handleChangeCS5590PA}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 
                                    
                                    <p>CS 5592: {data.cs5592}</p>
                                <select onChange={handleChangeCS5592}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 
                                    
                                    <p>CS 5596A: {data.cs5596a}</p>
                                <select onChange={handleChangeCS5596A}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 
                                    
                                    <p>CS 5596B: {data.cs5596b}</p>
                                <select onChange={handleChangeCS5596B}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                ))}</select> 

                            </Typography>
                        </Grid>
                        <Grid button justifyContent='right'>
                            <br></br>
                            <Button variant="contained" onClick={closeECEAnchor}> Close </Button>
                        </Grid>
                    </Grid>
                </div>
            </Typography>
        </Popover>
    </Grid>                                

{/* Popover Section ECE/IT */}
<Grid button justifyContent='right'>
    <br></br>
    {/* <Button variant="contained" onClick={editGradeECE}>Edit</Button> */}
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
                width: '825px',
                height: '550px'
            }}>
                <Grid container spacing={5} justifyContent='center' columns={5}>
                    <Grid item>
                        <Typography variant='p' align='justify' color='textSecondary' paragraph fontSize= "6">
                            <p>ECE 216: {data.ece216}</p>
                            <select onChange={handleChangeECE216}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select>

                            <p>ECE 226: {data.ece226}</p>
                            <select onChange={handleChangeECE226}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select>

                            <p>ECE 228: {data.ece228}</p>
                            <select onChange={handleChangeECE228}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                            <p>ECE 241: {data.ece241}</p>
                            <select onChange={handleChangeECE241}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select>

                            <p>ECE 276: {data.ece276}</p>
                            <select onChange={handleChangeECE276}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='p' align='justify' color='textSecondary' paragraph>
                            <p>ECE 302: {data.ece302}</p>
                            <select onChange={handleChangeECE302}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                            <p>ECE 330: {data.ece330}</p>   
                                <select onChange={handleChangeECE330}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                            <p>ECE 341R: {data.ece341r}</p> 
                            <select onChange={handleChangeECE341r}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='p' align='justify' color='textSecondary' paragraph>
                            <p>ECE 428R: {data.ece428r}</p>
                            <select onChange={handleChangeECE428r}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                            <p>ECE 458: {data.ece458}</p>
                            <select onChange={handleChangeECE458}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 
                            
                            <p>ECE 466: {data.ece466}</p> 
                            <select onChange={handleChangeECE466}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                            <p>ECE 477: {data.ece477}</p>
                            <select onChange={handleChangeECE477}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                            <p>ECE 486: {data.ece486}</p> 
                            <select onChange={handleChangeECE486}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='p' align='justify' color='textSecondary' paragraph>
                            <p>ECE 5558: {data.ece5558}</p>
                            <select onChange={handleChangeECE5558}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                            <p>ECE 5560: {data.ece5560}</p>
                            <select onChange={handleChangeECE5560}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                            <p>ECE 5567: {data.ece5567}</p> 
                            <select onChange={handleChangeECE5567}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                            <p>ECE 5577: {data.cs5577}</p>
                            <select onChange={handleChangeECE5577}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                            <p>ECE 5578: {data.cs5578}</p> 
                            <select onChange={handleChangeECE5578}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                            <p>ECE 5586: {data.cs5586}</p> 
                            <select onChange={handleChangeECE5586}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='p' align='justify' color='textSecondary' paragraph>
                            <p>IT 222: {data.it222}</p>
                            <select onChange={handleChangeIT222}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                            <p>IT 321: {data.it321}</p>
                            <select onChange={handleChangeIT321}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                            ))}</select> 

                        </Typography>
                    </Grid>
                    <Grid button justifyContent='right'>
                        <br></br>
                        <Button variant="contained" onClick={closeECEAnchor}> Close </Button>
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