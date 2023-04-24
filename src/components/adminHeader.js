import * as React from "react";
import { useState } from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import umkcLogo from '../../src/assets/images/umkclogo.png';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const sideMenuList = () => (
	<div
	  role="presentation"
	  onClick={toggleDrawer(false)}
	  onKeyDown={toggleDrawer(false)}
	  style={{ backgroundColor: '#005293' }}
	>
	  <List>
		<img
		  alt="UMKC"
		  src={umkcLogo}
		  style={{
			height: '100%',
			maxHeight: '40px',
		  }}
		/>
		<ListItem button component={Link} to="/">
		  <ListItemText
			primary="Student View"
			primaryTypographyProps={{ style: { color: "white" } }} // Add this line to change the Student View text color to white
		  />
		</ListItem>	
	  </List>
	</div>
  );
  

  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: "#005293", color: "white" }}>
        <IconButton
          size="large"
          edge="start"
          style={{ backgroundColor: "#005293", color: "white" }}
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
		  PaperProps={{
			style: {
			  backgroundColor: "#005293", // Add this line to change the background color of the entire drawer
			},
		  }}
        >
          {sideMenuList()}
        </Drawer>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Job Management Page
        </Typography>
        <Button
          style={{ backgroundColor: "#005293", color: "white" }}
          component={Link}
          to="/signup"
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}