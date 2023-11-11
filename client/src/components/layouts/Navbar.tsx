import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import LogoImg from "../../images/logo.png";

function Navbar() {
  return (
    <Box
      sx={{
        position: "flxed",
        margin: "0px",
        padding: "1rem ",
        display: "flex",
        fontSize: "20px",
        fontWeight: "500",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      bgcolor={"transparent"}
      color="white"
    >
      <Box
        sx={{
          fontSize: "18px",
          fontWeight: "500",
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src={LogoImg} alt="logo" width={32} />
          <Typography variant="h5">
            <Link to="/">Chronic</Link>
          </Typography>
        </Box>
        <Typography variant="h5">
          <Link to="/">Home</Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/">Services</Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/">About</Link>
        </Typography>
      </Box>
      <Box>
        <Button variant="contained" sx={{ marginRight: "2rem" }}>
          Sign In
        </Button>
        <Button variant="contained">Sign Up</Button>
      </Box>
    </Box>
  );
}

export default Navbar;
