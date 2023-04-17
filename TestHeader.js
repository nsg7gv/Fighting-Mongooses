import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';

export default function Header() {
return (
	<AppBar position="static">
		<Toolbar style={{ backgroundColor: '#005293', color: 'white' }}>
		<IconButton
			size="large"
			edge="start"
			style={{ backgroundColor: '#005293', color: 'white' }}
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			<MenuIcon />
		</IconButton>
		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			Job Management Page
		</Typography>
		<Button 
		style={{ backgroundColor: '#005293', color: 'white' }}
		component={Link} to="/signup"
		>Logout</Button>
		</Toolbar>
	</AppBar>
);
}
