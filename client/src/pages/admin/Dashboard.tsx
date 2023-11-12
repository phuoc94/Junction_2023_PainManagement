import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useGlobalContext } from '../../context/useGlobalContext';

// icons
import { AccountBox, ShoppingBag, ShoppingCart } from '@mui/icons-material';
import { ColorVariant } from '../../@types/theme';
import DashboardCardWidget from '../../components/DashboardCardWidget';

type TDashboardMainCard = {
  title: string;
  color: ColorVariant;
  total: number | string;
  icon: React.ReactNode;
};

// data
const cards: TDashboardMainCard[] = [
  {
    title: 'Total Plans',
    color: 'primary',
    total: 100,
    icon: <ShoppingBag />,
  },
  {
    title: 'Total Members',
    color: 'info',
    total: 100,
    icon: <AccountBox />,
  },
  {
    title: 'Total Exercises',
    color: 'warning',
    total: 100,
    icon: <ShoppingCart />,
  },
];

function Dashboard() {
  const { user } = useGlobalContext();

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        sx={{ mb: 5 }}
      >
        Hi, Welcome back, {user?.name}
      </Typography>

      <Grid
        container
        spacing={3}
      >
        {cards.map((card) => {
          return (
            <Grid
              key={card.title}
              item
              xs={12}
              sm={6}
              md={3}
            >
              <DashboardCardWidget
                title={card.title}
                total={card.total}
                color={card.color}
                icon={card.icon}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Dashboard;
