// MUI
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material';

// icons
import { Menu as MenuIcon } from '@mui/icons-material';

// components
import AccountPopover from './AccountPopover';

// utils
import { ADMIN_SIDEBAR_WIDTH } from '../../../utils/constants';
import { useThemeContext } from '../../../context/useThemeContext';

// component props type
type TopBarProps = {
  handleSideBarOpen: () => void;
};

function TopBar({ handleSideBarOpen }: TopBarProps) {
  const { theme } = useThemeContext();

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        backgroundColor: 'background.default',
        color: 'text.primary',
        [theme.breakpoints.up('lg')]: {
          width: `calc(100% - ${ADMIN_SIDEBAR_WIDTH + 1}px)`,
        },
      }}
    >
      <Toolbar>
        <IconButton
          onClick={() => handleSideBarOpen()}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <IconButton
            disabled
            sx={{
              padding: 0,
              width: 44,
              height: 44,
            }}
          >
            <img
              width={24}
              src={'https://tailwindui.com/img/flags/flag-united-states.svg'}
              alt={'flag'}
            />
          </IconButton>

          <AccountPopover />
        </Stack>
      </Toolbar>
      <Divider light />
    </AppBar>
  );
}

export default TopBar;
