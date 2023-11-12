import axios, { AxiosError } from "axios";
import { enqueueSnackbar, VariantType } from "notistack";

export const showApiErrorToastr = (error: Error | AxiosError) => {
  enqueueSnackbar(
    axios.isAxiosError(error) ? error.response?.data?.message : error.message,
    {
      variant: "error",
    }
  );
};

export const showCustomToastr = (message: string, variant: VariantType) => {
  enqueueSnackbar(message, { variant });
};
