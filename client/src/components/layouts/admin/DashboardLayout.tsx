import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// MUI
import { Box } from "@mui/material";

// components
import TopBar from "./TopBar";
import SideBar from "./SideBar";

function DashboardLayout() {
  // mobile view drawer handlers and states
  const { pathname } = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    setOpenDrawer(false);
  }, [pathname]);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100%",
        overflow: "hidden",
      }}
    >
      <TopBar handleSideBarOpen={() => setOpenDrawer(true)} />
      <SideBar isOpen={openDrawer} handleClose={() => setOpenDrawer(false)} />
      <Box
        sx={{
          paddingTop: "100px",
          width: "100%",
          paddingBottom: "4rem",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default DashboardLayout;
