import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FullWidthTextField from './fullWidth';
import CheckboxList from './checkBox';
import PostionCheckboxList from './postionCheckbox';
import ClassCheckboxList from './classCheckbox';
import DegreeCheckboxList from './degreeCheckbox';
import CheckboxListGTA from './checkboxGTA';


export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
            <p>     </p>
          <FullWidthTextField/>
          <p>     </p>
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Degree" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <DegreeCheckboxList/>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Graduating Semester" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <CheckboxList/>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Position" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <PostionCheckboxList/>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Class" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ClassCheckboxList/>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="GTA Certification" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <CheckboxListGTA/>
        </List>
      </Collapse>
    </List>
  );
}