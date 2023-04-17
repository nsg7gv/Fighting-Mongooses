import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';
import umkcLogo from '../../src/assets/images/umkclogo.png';
import NestedList from './nestedList';
import JobCard from './card';

const pages = ['GTA Certification', 'Course Descriptions'];
const pageLinks = ['https://catalog.umkc.edu/course-offerings/', 'https://catalog.umkc.edu/general-graduate-academic-regulations-information/international-graduate-student-academic-regulations/'];
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

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
              <Button
                //color='inherit'
                style={{ backgroundColor: '#005293', color: 'white' }}
                component={Link} to="/signin"
              >Log In
              </Button>
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <JobCard/>
      </Box>
    </Box>
  );
}
export default ResponsiveAppBar;
