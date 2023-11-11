import React from "react";
import { Card, Grid, Typography, Box, Container } from "@mui/material";
import back1Img from "../images/back1.png";
import back2Img from "../images/back2.png";

function Recommandation() {
  const backPains = [
    {
      title: "Lower Back Pain",
      Image: back1Img,
      detail:
        "In this video, Dr. Andrea Furlan explains what non-specific low back pain is, the difference between acute and chronic low back pain, and how to prevent episodes of low back pain. She will also discuss the different therapies through exercise, manual therapy, medications, relaxation, lifestyle modifications and nutrition.          ",
    },
    {
      title: "Upper Back Pain",
      Image: back2Img,
      detail:
        "In this video, Dr. Andrea Furlan explains what non-specific low back pain is, the difference between acute and chronic low back pain, and how to prevent episodes of low back pain. She will also discuss the different therapies through exercise, manual therapy, medications, relaxation, lifestyle modifications and nutrition.          ",
    },
  ];
  return (
    <Box padding={"2rem"}>
      <Grid container>
        <Grid item md={5}>
          <Typography variant="h3" fontWeight={"700"} marginBottom={"1rem"}>
            Recommendation Plan
          </Typography>
          <Typography variant="body1" color={"#737373"}>
            We have recommended following plans for you based on the description
            you’ve given for the chronic pain you are having
          </Typography>
        </Grid>
        <Grid item md={7}></Grid>
      </Grid>
      <Container
        maxWidth="md"
        sx={{ margin: "4rem 0rem  2rem 0rem", justifyContent: "center" }}
      >
        {backPains.map((pain, index) => {
          return (
            <Card
              key={index}
              sx={{
                marginBottom: "2rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              <Grid container spacing={4}>
                <Grid item md={4} height={"200px"}>
                  <img src={pain.Image} height={"100%"} width={"fit-content"} />
                </Grid>
                <Grid
                  item
                  md={8}
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <Typography variant="h6" color={"#0B7077"} fontWeight={"600"}>
                    {pain.title}
                  </Typography>
                  <Typography variant="body1" color={"#4D4D4D"}>
                    {pain.detail}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </Container>
    </Box>
  );
}

export default Recommandation;
