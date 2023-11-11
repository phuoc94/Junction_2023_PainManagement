import { Box, Card, Grid, Typography } from '@mui/material'

import DetailImg from '../images/detail.png'
import Teq1Img from '../images/teq1.png'
import Teq2Img from '../images/teq2.png'
import Teq3Img from '../images/teq3.png'
import Teq4Img from '../images/teq4.png'

const teqs = [
  {
    title: 'Exercise',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .',
    image: Teq1Img,
    active: true,
  },
  {
    title: 'Meditation and Relaxation',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .',
    image: Teq2Img,
    active: false,
  },
  {
    title: 'Physical Therapy or Rehabilitation',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .',
    image: Teq3Img,
    active: false,
  },
  {
    title: 'Lifestyle Changes',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .',
    image: Teq4Img,
    active: false,
  },
]

function Detail() {
  return (
    <Box>
      <Box padding={'2rem'}>
        <Typography variant="h3" fontWeight={'600'}>
          Low Back Pain
        </Typography>
        <Typography variant="body1">
          In this video, Dr. Andrea Furlan explains what non-specific low back
          pain is, the difference between acute and chronic low back pain, and
          how to prevent episodes of low back pain. She will also discuss the
          different therapies through exercise, manual therapy, medications,
          relaxation, lifestyle modifications and nutrition.
        </Typography>
      </Box>

      <Grid container sx={{ marginTop: '2rem' }} spacing={4}>
        <Grid item md={8}>
          <Card sx={{ padding: '2rem' }}>
            <img src={DetailImg} />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                marginBottom: '1rem',
              }}
            >
              <Box
                sx={{
                  padding: '0.3rem',
                  backgroundColor: '#EB459F',
                  borderRadius: '100%',
                }}
              ></Box>
              <Typography variant="body1">
                {' '}
                Lie on your back with knees bent and feet flat on the floor.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <Box
                sx={{
                  padding: '0.3rem',
                  backgroundColor: '#EB459F',
                  borderRadius: '100%',
                }}
              ></Box>
              <Typography variant="body1">
                {' '}
                Tighten your abdominal muscles and tilt your pelvis, pressing
                your lower back into the floor. Hold for a few seconds, then
                release. Repeat several times.
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Typography variant="h3" fontWeight={'600'} marginBottom={'1rem'}>
            Basic Techniques
          </Typography>
          {teqs.map((teq, index) => {
            return (
              <Card
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '2rem',
                  borderRadius: '1rem',
                  marginBottom: '1rem',
                  backgroundColor: `${
                    teq.active ? 'secondary.main' : '#f4f4f4'
                  }`,
                  color: `${teq.active ? '#fff' : '#000'}`,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    padding: '1rem',
                  }}
                >
                  <Typography variant="h5">{teq.title}</Typography>
                  <Typography variant="body2">{teq.detail}</Typography>
                </Box>
                <img src={teq.image} />
              </Card>
            )
          })}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Detail
