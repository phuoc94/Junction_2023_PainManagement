import React, { useEffect, useState } from 'react'

import { AxiosError } from 'axios'

import {
  Alert,
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'

import { GetMyAchievements } from '../@types/achievements'
import { GetMyApproaches } from '../@types/approaches'
import { useGlobalContext } from '../context/useGlobalContext'
import { getMyAchievements, getMyApproaches } from '../services/userService'
import { showApiErrorToastr } from '../utils/errorHandler'

function Profile() {
  const { user } = useGlobalContext()
  // tabs
  const [value, setValue] = useState(0)
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const [achievements, setAchievements] = useState<GetMyAchievements>([])
  const [approaches, setApproaches] = useState<GetMyApproaches>([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const [achievementsData, approachesData] = await Promise.all([
        getMyAchievements(),
        getMyApproaches(),
      ])
      setAchievements(achievementsData)
      setApproaches(approachesData)
    } catch (e) {
      const error = e as AxiosError
      showApiErrorToastr(error)
    }
  }

  return (
    <Container sx={{ marginTop: 4 }}>
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
                  <Typography variant="h5">{user.name}</Typography>
                  <Typography variant="caption" gutterBottom>
                    {user.email}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Member ID: 54747474
                  </Typography>
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
              <Tab label={'Achievements'} />
              <Tab label={'Approaches'} />
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
        {achievements.length ? (
          <Grid container rowSpacing={4} columnSpacing={4}>
            {achievements.map((achievement) => {
              return (
                <Grid item sm={12} md={6} key={achievement._id}>
                  <Card sx={{ display: 'flex' }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={achievement.img_url}
                      alt={achievement.name}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                          {achievement.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          component="div"
                        >
                          {achievement.description}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        ) : (
          <Alert severity="error">
            No achievements found! Your achievements appears here.
          </Alert>
        )}
      </Box>
      {/* tab 2 */}
      <Box
        role="tabpanel"
        component={'div'}
        hidden={value !== 1}
        sx={{ marginTop: 4 }}
      >
        {approaches.length ? (
          <Grid container rowSpacing={4} columnSpacing={4}>
            {approaches.map((approache) => {
              return (
                <Grid item sm={12} md={6} key={approache._id}>
                  <Card sx={{ display: 'flex' }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={approache.approaches.img_url}
                      alt={approache.approaches.name}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                          {approache.approaches.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          component="div"
                          gutterBottom
                        >
                          {approache.approaches.description}
                        </Typography>
                        <Chip label={approache.status} size="small" />
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        ) : (
          <Alert severity="error">
            No approaches found! Your approaches appears here.
          </Alert>
        )}
      </Box>
      {/* tab 3 */}
    </Container>
  )
}

export default Profile
