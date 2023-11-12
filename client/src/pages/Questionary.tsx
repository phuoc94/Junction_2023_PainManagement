import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@mui/material";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  Controller,
} from "react-hook-form";

import axiosInstance from "../utils/AxiosInstance";

import { useNavigate } from "react-router-dom";
import { CategoriesResponse } from "../@types/category";

type Inputs = {
  categoryId: string;
  detail: string;
};

function Questionary() {
  const [categories, setCategories] = useState<CategoriesResponse>();
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const QuestionaryForm: SubmitHandler<Inputs> = async (values) => {
    try {
      navigate(`/recommendation/${values.categoryId}`);
    } catch (error) {
      console.log(error);
    }
  };

  async function getCategories() {
    try {
      const response = await axiosInstance.get("/pains-categories");
      setCategories(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container maxWidth="sm">
      <Card
        component={"form"}
        sx={{ p: "3rem 2rem" }}
        variant="elevation"
        onSubmit={handleSubmit(QuestionaryForm)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",

            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={"600"}
            marginBottom={"2rem"}
            color={"secondary.main"}
            textAlign={"center"}
          >
            What kind of pain you have?
          </Typography>

          <Controller
            name="categoryId"
            control={control}
            render={({ field }) => (
              <FormControl error={Boolean(errors.categoryId)}>
                <InputLabel id="demo-simple-select-label">
                  Select a category
                </InputLabel>
                <Select
                  {...field}
                  label="Select a category"
                  variant="outlined"
                  {...register("categoryId", {
                    required: {
                      value: true,
                      message: "category is required",
                    },
                  })}
                  error={Boolean(errors.categoryId)}
                >
                  {categories?.map((category) => {
                    return (
                      <MenuItem key={category._id} value={category._id}>
                        {category.name}
                      </MenuItem>
                    );
                  })}
                </Select>
                {errors.categoryId?.message ? (
                  <FormHelperText>{errors.categoryId?.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <TextField
            multiline
            label="Detail"
            minRows={4}
            fullWidth
            error={Boolean(errors.detail)}
            helperText={errors.detail?.message}
            placeholder="describe what kind of pain do you have. here..."
            {...register("detail", {
              required: {
                value: true,
                message: "detail is required",
              },
            })}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: "1rem", backgroundColor: "secondary.main" }}
          >
            Submit
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export default Questionary;
