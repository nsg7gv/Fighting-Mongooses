import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import UserContext from './UserContext';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { DialogContentText } from '@mui/material';
import { db } from './firebase-config';
import { collection, doc, updateDoc, FieldValue } from 'firebase/firestore';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function JobCard(props) {
  const { job } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = React.useState(false);
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleApplyClick = () => {
    if (user) {
      setConfirmDialogOpen(true);
    } else {
      // user is not logged in, redirect to signup page
      navigate('/signup');
    }
  };

  const handleConfirmDialogClose = async (confirm) => {
    setConfirmDialogOpen(false);
    if (confirm) {
      try {
        const applicationRef = collection(db, 'application');
        const courseRef = doc(applicationRef, job.Courseid);
  
        await updateDoc(courseRef, {
          UMsysID: FieldValue.arrayUnion(user.email),
        });
  
        alert('Your application has been submitted successfully!');
      } catch (error) {
        alert('An error occurred while submitting your application. Please try again later.');
        console.error(error);
      }
    }
  };
  
  
  
  
  
  
  
  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={job.Courseid} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <ul>
              <li>{job.Courseid}</li>
              <li>Term: {job.Term}</li>
              <li>Type: {job.Type}</li>
              <li>Number of Positions Available: {job.NumPositions}</li>
              <li>Undergraduates: You may only apply to be a grader for a course you have taken at UMKC.</li>
              <li>Master’s Students: You may only apply to be a grader for undergraduate courses you took during your, previous, course of study. You may only apply to grade for graduate-level classes you have taken at UMKC (and received a satisfactory grade of an A,  A- or B+).</li>
              <li>PhD Students: You may be considered as a grader for any class, based on feedback from your advisor.</li>
            </ul>
            <Button onClick={handleApplyClick}>Apply</Button>
            {user && (
              <Dialog open={confirmDialogOpen} onClose={() => handleConfirmDialogClose(false)}>
                <DialogTitle>Confirm Application</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Are you sure you want to apply for this position?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => handleConfirmDialogClose(false)}>Cancel</Button>
                  <Button onClick={() => handleConfirmDialogClose(true)} autoFocus>
                    Apply
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
            }  