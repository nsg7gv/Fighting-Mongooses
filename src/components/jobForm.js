import React from 'react';
import { TextField, Grid, Typography } from '@material-ui/core';


const JobForm = ({ setCourseID, setTerm, setType, setNumPosition, setState, setDegree, setGradSemester, setClassType }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    
    <Typography variant="h4" align="center" style={{ marginBottom: '2rem' }}>
      Manage Jobs
    </Typography>
    <Grid container spacing={2} justify="center">
      <Grid item xs={12} sm={10}>
        <TextField
          variant="outlined"
          size="medium"
          fullWidth
          name="courseID"
          placeholder="*Course ID"
          inputProps={{ style: { textTransform: 'uppercase' } }}
          onChange={(event) => setCourseID(event.target.value.toUpperCase())}

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
              <Grid container spacing={3} justify="center">
      <Grid item xs={12} sm={10}>
        <TextField
          variant='outlined'
          size='medium'
          fullWidth
          name='degree'
          placeholder='Degree Required'
          onChange={(event) => { setDegree(event.target.value) }}
        />
      </Grid>
    </Grid>
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} sm={10}>
        <TextField
          variant='outlined'
          size='medium'
          fullWidth
          name='gradSemester'
          placeholder='Graduating Semester'
          onChange={(event) => { setGradSemester(event.target.value) }}
        />
      </Grid>
    </Grid>
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} sm={10}>
        <TextField
          variant='outlined'
          size='medium'
          fullWidth
          name='classType'
          placeholder='Class Type'
          onChange={(event) => { setClassType(event.target.value) }}
        />
      </Grid>
    </Grid>
  </div>
);
export default JobForm;