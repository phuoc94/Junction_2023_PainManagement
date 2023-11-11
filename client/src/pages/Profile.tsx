import { useState } from 'react'

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'

import ProfileEditModal from '../components/ProfileEditModal'

function Profile() {
  // tabs
  const [value, setValue] = useState(0)
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  // modal
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <Card sx={{ paddingBottom: 0 }}>
        <CardContent sx={{ paddingBottom: '0px !important' }}>
          <Grid container padding={0}>
            <Grid md={6} sm={12} item sx={{ borderRight: '2px dotted #ddd' }}>
              <Grid container>
                <Grid md={4} sm={6}>
                  <IconButton sx={{ position: 'relative' }}>
                    <Avatar src="url here" sx={{ width: 128, height: 128 }} />
                  </IconButton>
                </Grid>
                <Grid md={8} sm={6}>
                  <Typography variant="h5">Full Name</Typography>
                  <Typography variant="caption" gutterBottom>
                    email@mail.com
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Member ID: 54747474
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => setIsOpen(true)}
                  >
                    Edit Profile
                  </Button>
                  <ProfileEditModal isOpen={isOpen} setIsOpen={setIsOpen} />
                </Grid>
              </Grid>
            </Grid>
            <Grid md={6} sm={12} item>
              <Grid container padding={2}>
                <Grid md={4} sm={6}>
                  <Typography variant="body1" gutterBottom>
                    Phone:
                  </Typography>
                </Grid>
                <Grid md={8} sm={6}>
                  <Typography variant="body2">770-889-6484</Typography>
                </Grid>
                <Grid md={4} sm={6}>
                  <Typography variant="body1" gutterBottom>
                    Address:
                  </Typography>
                </Grid>
                <Grid md={8} sm={6}>
                  <Typography variant="body2">
                    714 Burwell Heights Road, Bridge City, TX, 77611
                  </Typography>
                </Grid>
                <Grid md={4} sm={6}>
                  <Typography variant="body1" gutterBottom>
                    Gender:
                  </Typography>
                </Grid>
                <Grid md={8} sm={6}>
                  <Typography variant="body2">Male</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 4 }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label={'History'} />
              <Tab label={'Achievements'} />
              <Tab label={'Something'} />
            </Tabs>
          </Box>
        </CardContent>
      </Card>

      {/* tab 1 */}
      <Box
        role="tabpanel"
        component={'div'}
        hidden={value !== 0}
        sx={{ marginTop: 4 }}
      >
        <Card>
          <CardContent>Tab 1 content here</CardContent>
        </Card>
      </Box>
      {/* tab 2 */}
      <Box
        role="tabpanel"
        component={'div'}
        hidden={value !== 1}
        sx={{ marginTop: 4 }}
      >
        <Card>
          <CardContent>Tab 2 content here</CardContent>
        </Card>
      </Box>
      {/* tab 3 */}
      <Box
        role="tabpanel"
        component={'div'}
        hidden={value !== 2}
        sx={{ marginTop: 4 }}
      >
        <Card>
          <CardContent>Tab 3 content here</CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default Profile
