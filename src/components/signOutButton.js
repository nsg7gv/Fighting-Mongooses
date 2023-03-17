import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const SignOutButton = () => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <Button
      variant="contained"
      style={{ backgroundColor: '#005293', color: 'white' }}
      component={Link}
      to="/signin"
    >
      Sign Out
    </Button>
  </div>
);

export default SignOutButton;
