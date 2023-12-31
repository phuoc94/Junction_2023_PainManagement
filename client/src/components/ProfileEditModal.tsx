import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

// component props type
type ProfileEditModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function ProfileEditModal({ isOpen, onClose }: ProfileEditModalProps) {
  return (
    <Dialog
      component={'form'}
      fullWidth
      onSubmit={() => console.log('submit function')}
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            padding: '2rem 0rem',
          }}
        >
          <TextField
            label="Full name"
            variant="outlined"
          />
          <TextField
            label="Email"
            variant="outlined"
          />
          <TextField
            label="Address"
            variant="outlined"
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ padding: 2, marginBottom: 2 }}>
        <Button
          variant="outlined"
          color="error"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="success"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ProfileEditModal
