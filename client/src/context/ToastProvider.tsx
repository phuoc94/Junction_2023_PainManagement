import React from "react";

// Snackbar
import { SnackbarProvider } from "notistack";

function ToastrProvider({ children }: React.PropsWithChildren) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      {children}
    </SnackbarProvider>
  );
}

export default ToastrProvider;
