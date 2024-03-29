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
import { doc, updateDoc, setDoc, getDoc} from 'firebase/firestore';
import { db } from './firebase-config';


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
  const [isFavorite, setIsFavorite] = React.useState(false); // added state to hold the color of the icon
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleApplyClick = async () => {
    if (user) {
      if (window.confirm('Are you sure you want to apply for this position?')) {
        try {
          // Check if the user has already applied
          const courseDocRef = doc(db, 'application', job.Courseid);
          const courseDoc = await getDoc(courseDocRef);
          if (courseDoc.exists() && courseDoc.data()[user.Email]) {
            // User has already applied, inform them and return
            alert('You have already applied for this position.');
            return;
          }
  
          // Create a new document if it doesn't exist
          if (!courseDoc.exists()) {
            await setDoc(courseDocRef, {});
          }
  
          // Update the Firestore database
          await setDoc(courseDocRef, {
            [user.Email]: true,
          }, { merge: true });
  
          // Notify the user that their application was successful
          alert('Your application was successful!');
        } catch (error) {
          console.error('Error updating Firestore document:', error);
          // Notify the user that there was an error
          alert('There was an error submitting your application. Please try again later.');
        }
      }
    } else {
      // user is not logged in, redirect to signup page
      navigate('/signup');
    }
  };

  // handle click of the favorite icon to toggle the color
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  const handleShareClick = (event) => {
    event.stopPropagation();
  
    const subject = 'Check out this job';
    const body = `Hi,\n\nI thought you might be interested in this job:\n\n${job.Courseid}\n\n${job.Term}\n\n${job.Type}\n\n${job.NumPositions}\n\n`;
  
    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Open the default email client with the pre-populated email message
    window.open(url, '_blank');
  };
  
  
  
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={job.Courseid} />
      <CardActions disableSpacing>
  <IconButton
    aria-label="add to favorites"
    onClick={handleFavoriteClick}
    sx={{ color: isFavorite ? 'red' : 'inherit' }} // set color based on isFavorite state
  >
    <FavoriteIcon />
    <IconButton aria-label="share" onClick={(event) => handleShareClick(event)}>
  <ShareIcon />
</IconButton>
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
            <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>Term: </Typography>{job.Term}<br />
            <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>Type: </Typography>{job.Type}<br />
            <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>Number of Positions Available: </Typography>{job.NumPositions}<br />
            <ul>
              <li>Undergraduates: You may only apply to be a grader for a course you have taken at UMKC.</li>
              <li>Master’s Students: You may only apply to be a grader for undergraduate courses you took during your, previous, course of study. You may only apply to grade for graduate-level classes you have taken at UMKC (and received a satisfactory grade of an A,  A- or B+).</li>
              <li>PhD Students: You may be considered as a grader for any class, based on feedback from your advisor.</li>
            </ul>
            <Button onClick={handleApplyClick}>Apply</Button>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
  

}
