import React, { useState, useEffect, useContext } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { 
  AppBar, Box, Button, Container, CssBaseline, Drawer, Grid, IconButton,
  InputBase, MenuItem, Menu, Toolbar, Typography 
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import umkcLogo from '../../src/assets/images/umkclogo.png';
import UserContext from './UserContext';
import JobCard from './card';
import NestedList from './nestedList';
import { db } from "./firebase-config";

const pages = ['GTA Certification', 'Course Descriptions'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 240;

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [jobData, setJobData] = useState([]);
  const JobCollectionRef = collection(db, "backenddata");

  useEffect(() => {
    getJobData();
  }, []);

  const getJobData = async () => {
    const data = await getDocs(JobCollectionRef);
    setJobData(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
  };

  const handleAdminClick = () => {
    navigate('/admin');
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{ backgroundColor: '#005293', color: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>


            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"

              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to="https://catalog.umkc.edu/course-offerings/">
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <Box sx={{ flexGrow: 0 }}>
                  <Button
                    //color='inherit'
                    style={{ backgroundColor: '#005293', color: 'white' }}
                    component={Link} to="https://catalog.umkc.edu/general-graduate-academic-regulations-information/international-graduate-student-academic-regulations/"
                  >GTA Certification
                  </Button>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                  <Button
                    //color='inherit'
                    style={{ backgroundColor: '#005293', color: 'white' }}
                    component={Link} to="https://catalog.umkc.edu/course-offerings/"
                  >Course Descriptions
                  </Button>
              </Box>
              </Menu>
            </Box>
            <Typography
  variant="h6"
  noWrap
  component="a"
  href="/"
  sx={{
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    backgroundColor: '#005293',
    textDecoration: 'none',
  }}
>
  <img
    alt="UMKC"
    src={umkcLogo}
    style={{
      height: '100%',
      maxHeight: '40px',
    }}
  />
</Typography>

            
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Button
                    //color='inherit'
                    style={{ backgroundColor: '#005293', color: 'white' }}
                    component={Link} to="https://catalog.umkc.edu/general-graduate-academic-regulations-information/international-graduate-student-academic-regulations/"
                  >GTA Certification
                  </Button>
                  <Button
                    //color='inherit'
                    style={{ backgroundColor: '#005293', color: 'white' }}
                    component={Link} to="https://catalog.umkc.edu/course-offerings/"
                  >Course Descriptions
                  </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
            {user && user.IsAdmin && (
  <Button onClick={handleAdminClick} style={{ backgroundColor: '#005293', color: 'white' }}>
    Admin
  </Button>
)}





{!user && (
  <Button
    //color='inherit'
    style={{ backgroundColor: '#005293', color: 'white' }}
    component={Link}
    to="/signin"
  >
    Log In
  </Button>
)}

{user && (
  <Button
    //color='inherit'
    style={{ backgroundColor: '#005293', color: 'white' }}
    component={Link}
    to="/signup"
  >
    Log out
  </Button>
)}

</Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <NestedList/>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 12 }}>

  <Grid container spacing={2}>
    {jobData.map((job) => (
      <Grid item key={job.id} xs={12} sm={6} md={4}>
        <JobCard job={job} />
      </Grid>
    ))}
  </Grid>
</Box>

  </Box>
  );
}
export default ResponsiveAppBar;