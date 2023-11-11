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

function Login() {
  return (
    <Container maxWidth="sm">
      <Card component={'form'} sx={{ p: '3rem 2rem' }} variant="elevation">
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
            id="outlined-multiline-flexible"
            label="Email"
            maxRows={4}
            fullWidth
            placeholder="Enter Email"
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Password"
            maxRows={4}
            fullWidth
            placeholder="Enter Password"
          />
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
