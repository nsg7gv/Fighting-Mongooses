import React, { useState } from 'react';
import { TextField, Grid, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


const JobForm = ({ setCourseID, setTerm, setType, setNumPosition, setState, setDegree, setGradSemester, setClassType }) => {
  const [classTypeSelected, setClassTypeSelected] = useState(false);

  const handleClassTypeChange = (event) => {
    setClassTypeSelected(event.target.value !== '');
    setClassType(event.target.value);
  }

  const [degreeSelected, setDegreeSelected] = useState(false);

  const handleDegreeChange = (event) => {
    setDegreeSelected(event.target.value !== '');
    setDegree(event.target.value);
  }

  return (
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
          <FormControl fullWidth variant="outlined" size="medium">
        {degreeSelected ? null : <InputLabel>Degree Required</InputLabel>}
          <Select
            variant="outlined"
            size="medium"
            fullWidth
            name="degree"
            value={setDegree}
            onChange={handleDegreeChange}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Bachelor's">Bachelor's</MenuItem>
            <MenuItem value="Master's">Master's</MenuItem>
            <MenuItem value="Doctorate">Doctorate</MenuItem>
          </Select>
        </FormControl>
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
          <FormControl fullWidth variant="outlined" size="medium">
            {classTypeSelected ? null : <InputLabel>Select Class Type</InputLabel>}
            <Select
              variant="outlined"
              size="medium"
              fullWidth
              name="classType"
              value={setClassType}
              onChange={handleClassTypeChange}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Computer Science">Computer Science</MenuItem>
              <MenuItem value="Information Technology">Information Technology</MenuItem>
              <MenuItem value="Electrical & Computer Engineering">Electrical & Computer Engineering</MenuItem>
              <MenuItem value="Electrical Engineering">Electrical Engineering</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
export default JobForm;