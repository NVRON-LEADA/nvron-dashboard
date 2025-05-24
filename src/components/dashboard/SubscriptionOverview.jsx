import { Card, CardContent, CardHeader, Typography, Box, List, ListItem, ListItemText, Chip } from '@mui/material';
import { MonetizationOn } from '@mui/icons-material';

const SubscriptionOverview = () => {
  // Mock data - Replace with actual API data
  const subscriptionData = [
    {
      clinicName: 'Metro Health Clinic',
      status: 'Active',
      expiryDate: '2024-01-15',
      plan: 'Premium',
    },
    {
      clinicName: 'City Medical Center',
      status: 'Trial',
      expiryDate: '2023-12-30',
      plan: 'Basic',
    },
    {
      clinicName: 'Wellness Plus',
      status: 'Expiring',
      expiryDate: '2023-12-10',
      plan: 'Premium',
    },
    {
      clinicName: 'Health First',
      status: 'Expired',
      expiryDate: '2023-11-30',
      plan: 'Standard',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Trial':
        return 'info';
      case 'Expiring':
        return 'warning';
      case 'Expired':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Card>
      <CardHeader
        avatar={<MonetizationOn color="primary" />}
        title="Subscription Overview"
        subheader="Recent subscription activity"
      />
      <CardContent>
        <List>
          {subscriptionData.map((item, index) => (
            <ListItem
              key={index}
              divider={index < subscriptionData.length - 1}
              sx={{ py: 2 }}
            >
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1">
                      {item.clinicName}
                    </Typography>
                    <Chip
                      label={item.status}
                      color={getStatusColor(item.status)}
                      size="small"
                    />
                  </Box>
                }
                secondary={
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Plan: {item.plan}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Expires: {item.expiryDate}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default SubscriptionOverview;