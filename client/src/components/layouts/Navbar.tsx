import React from 'react';
import {
  Box,
  Button,
  Menu,
  Tooltip,
  Typography,
  Avatar,
  IconButton,
  MenuItem,
<<<<<<< HEAD
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
=======
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> 771ccd49da681fb99b30e5e134e8cf87b5072b5c

import LogoImg from '../../images/logo.png';
import { useGlobalContext } from '../../context/useGlobalContext';

import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useGlobalContext();

  // user profile icon click popover state
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // handle user profile/icon click popover
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          margin: '0px',
          padding: '0.5rem ',
          display: 'flex',
          fontSize: '20px',
          fontWeight: '500',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            fontSize: '18px',
            fontWeight: '500',
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img
              src={LogoImg}
              alt="logo"
              width={32}
            />
            <Typography variant="h5">
              <Link to="/">Chronic</Link>
            </Typography>
          </Box>
          <Typography variant="h5">
            <Link to="/">Home</Link>
          </Typography>
          <Typography variant="h5">
            <Link to="/contact">Contact</Link>
          </Typography>
          <Typography variant="h5">
            <Link to="/about">About</Link>
          </Typography>
        </Box>
        {user ? (
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Tooltip title={user.name}>
              <IconButton onClick={handleMenu}>
                <Avatar
                  alt={user.name}
                  src={user.avatar}
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  mt: 2.2,
                  ml: 0.75,
                  width: 200,
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate('/profile');
                }}
                sx={{ minWidth: 180 }}
              >
                <AccountCircleIcon sx={{ marginRight: '0.5rem' }} /> Profile
              </MenuItem>
              <MenuItem onClick={() => logout()}>
                <LogoutIcon sx={{ marginRight: '0.5rem' }} /> Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box>
            <Link to="/login">
              <Button
                variant="contained"
                sx={{ marginRight: '2rem' }}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button variant="outlined">Sign Up</Button>
            </Link>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Navbar;
