import { Container, CircularProgress } from '@mui/material';

function AppLoader() {
  return (
    <Container
      maxWidth="md"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        height: '100vh',
        backgroundColor: 'background.primary',
      }}
    >
      <CircularProgress />
    </Container>
  );
}

export default AppLoader;
