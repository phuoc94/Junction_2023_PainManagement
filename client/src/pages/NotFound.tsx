import React from "react";
import { NavLink } from "react-router-dom";

// MUI
import { Box, Button, Container, Typography } from "@mui/material";

function NotFound() {
  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          alignItems: "center",
          maxWidth: 480,
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: 12,
        }}
      >
        <Typography variant="h3" paragraph>
          Sorry, page not found!
        </Typography>

        <Typography sx={{ color: "text.secondary", marginBottom: "2rem" }}>
          Sorry, we couldn't find the page you're looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>

        <Button to="/" size="large" variant="contained" component={NavLink}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
