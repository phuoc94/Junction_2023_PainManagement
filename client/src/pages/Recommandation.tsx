import React, { useEffect, useState } from "react";
import {
  Card,
  Grid,
  Typography,
  Box,
  Container,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { AxiosError } from "axios";
import { showApiErrorToastr } from "../utils/errorHandler";
import { getSingleCategory } from "../services/categoriesService";
import { SingleCategoryResponse } from "../@types/category";

function Recommandation() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState<SingleCategoryResponse>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await getSingleCategory(String(categoryId));
      console.log(data);
      setCategory(data);
    } catch (e) {
      const error = e as AxiosError;
      showApiErrorToastr(error);
    }
  };

  return (
    <Box padding={"2rem"}>
      <Grid container>
        <Grid item md={5}>
          <Typography variant="h3" fontWeight={"700"} marginBottom={"1rem"}>
            Recommendation Plan for {category?.name}
          </Typography>
          <Typography variant="body1" color={"#737373"}>
            {category?.description}
          </Typography>
        </Grid>
        <Grid item md={7}></Grid>
      </Grid>
      <Container
        maxWidth="md"
        sx={{ margin: "4rem 0rem  2rem 0rem", justifyContent: "center" }}
      >
        {category?.pains.map((pain) => {
          return (
            <Card key={pain._id}>
              <CardActionArea
                sx={{ display: "flex" }}
                onClick={() =>
                  navigate(`/approach/${category._id}/${pain._id}`)
                }
              >
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={pain.img_url}
                  alt={pain.name}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {pain.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="div"
                    >
                      {pain.description}
                    </Typography>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          );
        })}
      </Container>
    </Box>
  );
}

export default Recommandation;
