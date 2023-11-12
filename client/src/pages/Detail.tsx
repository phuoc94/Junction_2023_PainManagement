import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Card, CardMedia } from "@mui/material";
import DetailImg from "../images/detail.png";
import Teq1Img from "../images/teq1.png";
import Teq2Img from "../images/teq2.png";
import Teq3Img from "../images/teq3.png";
import Teq4Img from "../images/teq4.png";
import { useParams } from "react-router-dom";
import { Pain, SingleCategoryResponse } from "../@types/category";
import { getSingleCategory } from "../services/categoriesService";
import { showApiErrorToastr } from "../utils/errorHandler";
import { AxiosError } from "axios";

const teqs = [
  {
    title: "Exercise",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .",
    image: Teq1Img,
    active: true,
  },
  {
    title: "Meditation and Relaxation",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .",
    image: Teq2Img,
    active: false,
  },
  {
    title: "Physical Therapy or Rehabilitation",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .",
    image: Teq3Img,
    active: false,
  },
  {
    title: "Lifestyle Changes",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .",
    image: Teq4Img,
    active: false,
  },
];

function Detail() {
  const { categoryId, painId } = useParams();
  const [category, setCategory] = useState<SingleCategoryResponse>();
  const [pain, setPain] = useState<Pain>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await getSingleCategory(String(categoryId));
      setCategory(data);
      const foundPain = data.pains.find((p) => p._id === painId);
      setPain(foundPain);
    } catch (e) {
      const error = e as AxiosError;
      showApiErrorToastr(error);
    }
  };

  return (
    <Box>
      <Box padding={"2rem"}>
        <Typography variant="h3" fontWeight={"600"}>
          {pain?.name}
        </Typography>
        <Typography variant="body1">{pain?.description}</Typography>
      </Box>

      <Grid container sx={{ marginTop: "2rem" }} spacing={4}>
        <Grid item md={8}>
          <Card sx={{ padding: "2rem" }}>
            <CardMedia
              component="img"
              sx={{ width: "50%", margin: "auto" }}
              image={pain?.img_url}
              alt={pain?.name}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              <Box
                sx={{
                  padding: "0.3rem",
                  backgroundColor: "#EB459F",
                  borderRadius: "100%",
                }}
              ></Box>
              <Typography variant="body1">{pain?.description}</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Typography variant="h3" fontWeight={"600"} marginBottom={"1rem"}>
            Basic Techniques
          </Typography>
          {pain?.approaches.map((approach) => {
            return (
              <Card
                key={approach._id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem",
                  borderRadius: "1rem",
                  marginBottom: "1rem",
                  // backgroundColor: `${
                  //   teq.active ? "secondary.main" : "#f4f4f4"
                  // }`,
                  // color: `${teq.active ? "#fff" : "#000"}`,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    padding: "1rem",
                  }}
                >
                  <Typography variant="h5">{approach.name}</Typography>
                  <Typography variant="body2">
                    {approach.description}
                  </Typography>
                </Box>
                <img src={approach.img_url} />
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Detail;
