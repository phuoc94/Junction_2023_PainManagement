import React from 'react';
import { useNavigate } from 'react-router-dom';

// MUI
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';

// icons
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useGlobalContext } from '../../../context/useGlobalContext';

function AccountPopover() {
  const navigate = useNavigate();
  // user profie/icon click popover handler state
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // auth user state
  const { user, logout } = useGlobalContext();

  // popover click handler
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // logout handler
  const logoutUser = () => {
    handleClose();
    logout();
    navigate('/');
  };

  return (
    <>
      <IconButton onClick={handleMenu}>
        <Avatar
          sx={{ width: 32, height: 32 }}
          src={user?.avatar}
          alt="photoURL"
        />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <MenuItem
          onClick={() => {
            navigate('/admin/profile');
            handleClose();
          }}
          sx={{ minWidth: 180 }}
        >
          <AccountCircleIcon sx={{ marginRight: '0.5rem' }} /> Profile
        </MenuItem>
        <MenuItem onClick={logoutUser}>
          <LogoutIcon sx={{ marginRight: '0.5rem' }} /> Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default AccountPopover;
