import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const Dashboard = () => {
  const features = [
    {
      title: 'Create New Booking',
      icon: <AddIcon fontSize="large" />,
      description: 'Create a new group booking',
      link: '/create-booking'
    },
    {
      title: 'My Bookings',
      icon: <ListAltIcon fontSize="large" />,
      description: 'View and manage your bookings',
      link: '/my-bookings'
    },
    {
      title: 'Help & Support',
      icon: <HelpIcon fontSize="large" />,
      description: 'Get help and support',
      link: '/support'
    },
    {
      title: 'Notifications',
      icon: <NotificationsIcon fontSize="large" />,
      description: 'View your notifications',
      link: '/notifications'
    },
    {
      title: 'Manage Profile',
      icon: <PersonIcon fontSize="large" />,
      description: 'Update your profile',
      link: '/profile'
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Tour Operator Dashboard
      </Typography>
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                {feature.icon}
                <Typography gutterBottom variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography>
                  {feature.description}
                </Typography>
                <Button
                  component={Link}
                  to={feature.link}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Access
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
