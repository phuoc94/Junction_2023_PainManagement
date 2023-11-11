import React from "react";
import {
  Container,
  Card,
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";

const currencies = [
  {
    value: "Body Pain",
    label: "Body Pain",
  },
  {
    value: "Arthritis, or joint pain",
    label: "Arthritis, or joint pain",
  },
  {
    value: "Neck pain.",
    label: "Neck pain.",
  },
  {
    value: "Headaches, including migraines.",
    label: "Headaches, including migraines.",
  },
];

function Questionary() {
  return (
    <Container maxWidth="sm">
      <Card component={"form"} sx={{ p: "3rem 2rem" }} variant="elevation">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",

            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={"600"}
            marginBottom={"2rem"}
            color={"secondary.main"}
          >
            What kind of pain you have?
          </Typography>

          <TextField
            id="outlined-select-currency"
            select
            label="Pain Category"
            defaultValue="EUR"
            helperText="Please select your Category of Pain"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-multiline-flexible"
            multiline
            label="Detail"
            minRows={4}
            fullWidth
            placeholder="describe what kind of pain do you have. here..."
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: "1rem", backgroundColor: "secondary.main" }}
          >
            Submit
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export default Questionary;
