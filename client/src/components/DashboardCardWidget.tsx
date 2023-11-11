import React from "react";

// MUI
import { Box, Card, Theme, Typography, alpha } from "@mui/material";

// types
import { ColorVariant } from "../@types/theme";

// component props type
type AppWidgetSummaryProps = {
  color?: ColorVariant;
  icon: React.ReactNode;
  title: string;
  total: number | string;
  sx?: object;
};

function DashboardCardWidget({
  title,
  total,
  icon,
  color = "primary",
  sx = {},
  ...props
}: AppWidgetSummaryProps) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: "center",
        color: (theme: Theme) => theme.palette[color].dark,
        bgcolor: (theme: Theme) => theme.palette[color].light,
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          borderRadius: "50%",
          alignItems: "center",
          width: 48,
          height: 48,
          justifyContent: "center",
          marginBottom: "1rem",
          color: (theme: Theme) => theme.palette[color].dark,
          backgroundImage: (theme: Theme) =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0
            )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
        }}
      >
        {icon}
      </Box>
      <Typography variant="h3">{total}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}

export default DashboardCardWidget;
