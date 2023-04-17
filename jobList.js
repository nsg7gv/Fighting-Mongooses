import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@material-ui/core';
import Popup from './popup';

const JobList = ({ jobs, users, showPopup, setShowPopup }) => (
  <Container maxWidth="lg">
    <Typography variant="h4" align="center" style={{ marginBottom: '2rem' }}>
      Current Jobs
    </Typography>
    {jobs.map((job) => (
      <Card
        className="hover:animate-pulse m-4 rounded-md"
        style={{ backgroundColor: 'gray', width: '100%' }}
      >
        <CardContent>
          <Container component="main">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Table className="jobTable" style={{ tableLayout: 'fixed' }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Course ID</TableCell>
                      <TableCell>Term</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Num Positions</TableCell>
                      <TableCell>State</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{job.Courseid}</TableCell>
                      <TableCell>{job.Term}</TableCell>
                      <TableCell>{job.Type}</TableCell>
                      <TableCell>{job.NumPositions}</TableCell>
                      <TableCell>{job.State}</TableCell>
                      <TableCell>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: '#005293', color: 'white' }}
                        onClick={() => setShowPopup(true)}
                      >
                        Applicants
                      </Button>

                        {users.map((user) => (
                          <div key={user.id}>
                            {showPopup && (
                              <Popup
                                title="Applicants"
                                onClose={() => setShowPopup(false)}
                              >
                                <p>
                                  <strong>Email:</strong> {user.Email}
                                </p>
                                <p>
                                  <strong>Name:</strong> {user.LName},{' '}
                                  {user.FName}
                                </p>
                              </Popup>
                            )}
                          </div>
                        ))}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>
    ))}
  </Container>
);

export default JobList
