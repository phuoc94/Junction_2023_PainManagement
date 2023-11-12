import { useEffect, useState } from 'react'

import { AxiosError } from 'axios'
import { useParams } from 'react-router-dom'

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'

import { Detail, GetSingleApproachResponse } from '../@types/approaches'
import { Pain } from '../@types/category'
import { getSingleCategory } from '../services/categoriesService'
import { showApiErrorToastr } from '../utils/errorHandler'

function DetailPage() {
  const { categoryId, painId } = useParams()
  const [pain, setPain] = useState<Pain>()
  const [activeApproach, setActiveApproach] =
    useState<GetSingleApproachResponse>()
  const [activeDetail, setActiveDetail] = useState<Detail>()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const data = await getSingleCategory(String(categoryId))
      const foundPain = data.pains.find((p) => p._id === painId)
      setPain(foundPain)
      setActiveApproach(foundPain?.approaches[0])
      setActiveDetail(foundPain?.approaches[0].details[0])
    } catch (e) {
      const error = e as AxiosError
      showApiErrorToastr(error)
    }
  }

  return (
    <Box>
      <Box padding={'2rem'}>
        <Typography variant="h3" fontWeight={'600'}>
          {activeDetail?.name}
        </Typography>
        <Typography variant="body1">{activeDetail?.description}</Typography>
      </Box>

      <Grid container sx={{ marginTop: '2rem' }} spacing={4}>
        <Grid item md={8}>
          <Card sx={{ padding: '2rem' }}>
            <CardMedia
              component="img"
              sx={{ width: '50%', margin: 'auto' }}
              image={activeDetail?.img_url || activeApproach?.img_url}
              alt={activeDetail?.name}
            />
          </Card>
        </Grid>
        <Grid item md={4}>
          <Typography variant="h3" fontWeight={'600'} marginBottom={'1rem'}>
            Basic Techniques
          </Typography>
          {pain?.approaches.map((approach) => {
            return (
              <Card
                key={approach._id}
                sx={{
                  marginBottom: '1rem',
                  borderRadius: '1rem',
                  backgroundColor: `${
                    approach._id === activeApproach?._id
                      ? 'secondary.main'
                      : '#f4f4f4'
                  }`,
                  color: `${
                    approach._id === activeApproach?._id ? '#fff' : '#000'
                  }`,
                }}
              >
                <CardActionArea
                  onClick={() => setActiveApproach(approach)}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem',
                    borderRadius: '1rem',
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
                    <Typography variant="h5">{approach.name}</Typography>
                    <Typography variant="body2">
                      {approach.description}
                    </Typography>
                  </Box>
                  <img src={approach.img_url} height={'100px'} />
                </CardActionArea>
              </Card>
            )
          })}
        </Grid>
      </Grid>
      {activeApproach && activeApproach.details.length && (
        <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
          {activeApproach.details.map((detail) => {
            return (
              <Grid item lg={3} md={4} sm={2} key={detail._id}>
                <Card
                  sx={{
                    maxWidth: 345,
                    backgroundColor: `${
                      detail._id === activeDetail?._id ? 'info.main' : '#f4f4f4'
                    }`,
                    color: `${
                      detail._id === activeDetail?._id ? '#fff' : '#000'
                    }`,
                  }}
                >
                  <CardActionArea onClick={() => setActiveDetail(detail)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={detail.img_url}
                      alt={detail.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {detail.name}
                      </Typography>
                      <Typography variant="body2">
                        {detail.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      )}
    </Box>
  )
}

export default DetailPage
