import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  TextField,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import HeroImg from "../images/hero.png";
import PainImg from "../images/We-Fix-Pain-Fast-R 1.png";
import Company1Img from "../images/company1.png";
import Company2Img from "../images/company2.png";
import Company3Img from "../images/company3.png";
import Company4Img from "../images/company4.png";
import Company5Img from "../images/company5.png";
import Med1Img from "../images/medical1.png";
import Med2Img from "../images/medical2.png";
import Med3Img from "../images/medical3.png";
import WhyImg from "../images/why1.png";

import { Link, useNavigate } from "react-router-dom";
import { GetAllApproachesResponse } from "../@types/approaches";
import { AxiosError } from "axios";
import { showApiErrorToastr } from "../utils/errorHandler";
import { getCategories } from "../services/categoriesService";
import { CategoriesResponse } from "../@types/category";

const companies = [
  Company1Img,
  Company2Img,
  Company3Img,
  Company4Img,
  Company5Img,
];
const services = [
  {
    title: "Quick questionnaire",
    detail: "The gradual accumulation of information about ",
    image: Med1Img,
  },
  {
    title: "Plan recommendation",
    detail: "The gradual accumulation of information about ",
    image: Med2Img,
  },
  {
    title: "Painless procedures",
    detail: "The gradual accumulation of information about  ",
    image: Med3Img,
  },
];

function Home() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<CategoriesResponse>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (e) {
      const error = e as AxiosError;
      showApiErrorToastr(error);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          padding: "0rem 2rem",
        }}
      >
        <Grid
          container
          spacing={6}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "400px",
                  textAlign: "center",
                  padding: "4rem 0rem",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "700" }}
                  color={"primary.main"}
                >
                  LONG-TERM RELIEF FROM CHRONIC PAIN
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "700" }}
                  color={"secondary.main"}
                >
                  BEGINS HERE
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4rem",
                }}
              >
                <Box
                  bgcolor={"primary.main"}
                  color={"white"}
                  padding={"1rem"}
                  borderRadius={"0.25rem"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    gap: "1rem",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "700" }}>
                    EXPLORE VIRTUAL CARE
                  </Typography>
                  <Typography>
                    Same Great Care. Convenient Remote Access.
                  </Typography>
                  <Link to="/questionary">
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: "secondary.main",
                        fontWeight: "600",
                        padding: "0.5rem",
                        fontSize: "18px",
                      }}
                    >
                      VIEW PLANS
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ height: "100%", margin: "0px", padding: "0px" }}>
              <img src={HeroImg} style={{ height: "100%", width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          margin: "8rem 0rem",
          backgroundColor: "transparent",
        }}
      >
        <img src={PainImg} />
      </Box>
      <Grid
        container
        spacing={6}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "secondary.main", padding: "2rem 0rem" }}
      >
        {companies.map((company, index) => {
          return (
            <Grid item xs={2} key={index} padding={"0px"}>
              <img src={company} />
            </Grid>
          );
        })}
      </Grid>
      <Box sx={{ margin: "2rem 0rem", padding: "2rem" }}>
        <Grid container sx={{ padding: "2rem 4rem 0rem 4rem" }}>
          <Grid item xs={4}>
            <Typography variant="h4" fontWeight={"700"}>
              Our Activity
            </Typography>
            <Typography
              variant="body1"
              color={"#737373"}
              sx={{ marginTop: "1rem" }}
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </Typography>
          </Grid>
          <Grid xs={8}></Grid>
        </Grid>
        <Grid container spacing={6} padding={"4rem"}>
          {services.map((service, index) => {
            return (
              <Grid item key={index} md={4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    justifyContent: "center",
                    padding: "1rem",
                    cursor: "pointer",
                  }}
                >
                  <img src={service.image} height={"50px"} width={"50px"} />
                  <Typography variant="h6" fontWeight={"500"}>
                    {service.title}
                  </Typography>
                  <Box
                    bgcolor={"#EF5DA8"}
                    padding={"0.1rem"}
                    width={"50px"}
                  ></Box>
                  <Typography variant="body1" color={"#737373"}>
                    {service.detail}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Grid
        container
        spacing={6}
        bgcolor={"#f5f5f5"}
        padding={"3rem 2rem"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item md={6}>
          <img src={WhyImg} />
        </Grid>
        <Grid
          item
          md={6}
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Typography variant="h4" fontWeight={"700"}>
            Why You Choose Us?
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Typography variant="body1" color={"#2E2E2E"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="body1" color={"#2E2E2E"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="body1" color={"#2E2E2E"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="body1" color={"#2E2E2E"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="body1" color={"#2E2E2E"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box padding={"2rem"}>
        <Grid container sx={{ padding: "2rem 0rem" }}>
          <Grid item xs={6}>
            <Typography variant="h4" fontWeight={"700"}>
              Popular Categories
            </Typography>
            <Typography
              variant="body1"
              color={"#737373"}
              sx={{ marginTop: "1rem" }}
            >
              In order to facilitate access to relevant information, our
              resources are organized into categories according to the type of
              resource, user, knowledge sought and area of interest. We invite
              you to browse these categories below to guide your research.
            </Typography>
          </Grid>
          <Grid xs={6}></Grid>
        </Grid>
        <Grid container marginBottom={"2rem"} rowSpacing={4} columnSpacing={2}>
          {categories.map((category) => {
            return (
              <Grid item lg={3} md={4} sm={2} key={category._id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea
                    onClick={() => navigate(`/recommendation/${category._id}`)}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={category.img_url}
                      alt={category.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {category.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {category.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box
        sx={{
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box width={"50%"}>
          <Typography variant="h2" textAlign={"center"} margin={"1rem"}>
            JOIN US
          </Typography>
          <Typography variant="body1" textAlign={"center"} color={"#737373"}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem 0rem",
            }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              placeholder="Your Email"
              sx={{
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "secondary.main",
                padding: "1rem 2rem",
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
