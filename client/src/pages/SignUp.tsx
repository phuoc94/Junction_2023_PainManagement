import { AxiosError } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

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

import { signUp } from '../services/authService'
import { showApiErrorToastr, showCustomToastr } from '../utils/errorHandler'

type Inputs = {
  name: string
  email: string
  password: string
}
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const navigate = useNavigate()

  const signUpForm: SubmitHandler<Inputs> = async (values) => {
    try {
      await signUp(values)
      showCustomToastr('Registration success!', 'success')
      navigate('/login')
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
        onSubmit={handleSubmit(signUpForm)}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',

            justifyContent: 'center',
          }}
        >
          <Typography variant="h3">Create An Account</Typography>
          <TextField
            label="Name"
            maxRows={4}
            fullWidth
            placeholder="Enter Username"
            {...register('name', {
              required: {
                value: true,
                message: 'name is required',
              },
            })}
          />
          {errors.name && (
            <Typography variant="caption" color={'red'}>
              {errors.name?.message}
            </Typography>
          )}
          <TextField
            label="Email"
            maxRows={4}
            fullWidth
            placeholder="Enter Email"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required',
              },
            })}
          />
          {errors.email && (
            <Typography variant="caption" color={'red'}>
              {errors.name?.message}
            </Typography>
          )}
          <TextField
            label="Password"
            type="password"
            maxRows={4}
            fullWidth
            placeholder="Enter Password"
            {...register('password', {
              required: {
                value: true,
                message: 'Password is required',
              },
            })}
          />
          {errors.password && (
            <Typography variant="caption" color={'red'}>
              {errors.name?.message}
            </Typography>
          )}
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
          </FormGroup>
          <Button type="submit" variant="contained" sx={{ marginTop: '1rem' }}>
            SignUp
          </Button>
        </Box>
      </Card>
    </Container>
  )
}

export default SignUp
