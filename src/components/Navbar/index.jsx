import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Typography variant="h6" component="div">
          Home
        </Typography>
        <Typography variant="h6" component="div">
          About
        </Typography>
        <Typography variant="h6" component="div">
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
