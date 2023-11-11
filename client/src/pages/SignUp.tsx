import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Card,
} from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

// type Inputs = {
//   username: string;
//   email: string;
//   password: string;
// };
function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const signUpForm: SubmitHandler<FieldValues> = async (values) => {
    try {
      console.log(values);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container maxWidth="sm">
      <Card
        component={"form"}
        sx={{ p: "3rem 2rem" }}
        variant="elevation"
        onSubmit={handleSubmit(signUpForm)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",

            justifyContent: "center",
          }}
        >
          <Typography variant="h3">Create An Account</Typography>
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            maxRows={4}
            fullWidth
            placeholder="Enter Username"
            {...register("username", {
              required: {
                value: true,
                message: "username is required",
              },
            })}
          />
          {errors.username && (
            <Typography variant="caption" color={"red"}>
              "error"
            </Typography>
          )}
          <TextField
            id="outlined-multiline-flexible"
            label="Email"
            maxRows={4}
            fullWidth
            placeholder="Enter Email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          />
          {errors.email && (
            <Typography variant="caption" color={"red"}>
              "error"
            </Typography>
          )}
          <TextField
            id="outlined-multiline-flexible"
            label="Password"
            maxRows={4}
            fullWidth
            placeholder="Enter Password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          {errors.password && (
            <Typography variant="caption" color={"red"}>
              "error"
            </Typography>
          )}
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
          </FormGroup>
          <Button type="submit" variant="contained" sx={{ marginTop: "1rem" }}>
            SignUp
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export default SignUp;
