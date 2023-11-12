import { AxiosError } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material'

import { login } from '../services/authService'
import { showApiErrorToastr, showCustomToastr } from '../utils/errorHandler'

type LoginFormInputs = {
  email: string
  password: string
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>()

  const signInForm: SubmitHandler<LoginFormInputs> = async (values) => {
    try {
      await login(values)
      showCustomToastr('Login success!', 'success')
      window.location.href = '/'
    } catch (e) {
      const error = e as AxiosError
      showApiErrorToastr(error)
    }
  }

  return (
    <Container maxWidth="sm">
      <Card
        component={'form'}
        sx={{ p: '3rem 2rem' }}
        variant="elevation"
        onSubmit={handleSubmit(signInForm)}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',

            justifyContent: 'center',
          }}
        >
          <Typography variant="h3">Log In</Typography>

          <TextField
            label="Email"
            maxRows={4}
            fullWidth
            placeholder="Enter Email"
            {...register('email', {
              required: {
                value: true,
                message: 'email is required',
              },
            })}
          />
          {errors.email && (
            <Typography variant="caption" color={'red'}>
              "Email is required"
            </Typography>
          )}
          <TextField
            label="Password"
            maxRows={4}
            fullWidth
            type="password"
            placeholder="Enter Password"
            {...register('password', {
              required: {
                value: true,
                message: 'password is required',
              },
            })}
          />
          {errors.password && (
            <Typography variant="caption" color={'red'}>
              "Password is required"
            </Typography>
          )}
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
          </FormGroup>
          <Button type="submit" variant="contained" sx={{ marginTop: '1rem' }}>
            Login
          </Button>
        </Box>
      </Card>
    </Container>
  )
}

export default Login
