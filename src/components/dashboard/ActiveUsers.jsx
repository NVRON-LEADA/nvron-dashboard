import { Card, CardContent, CardHeader, Typography, Box, Avatar, Stack, Divider } from '@mui/material';
import { People as PeopleIcon, LocalHospital, Person, AdminPanelSettings } from '@mui/icons-material';

const UserTypeDisplay = ({ icon: Icon, label, count, color }) => (
  <Stack
    direction="row"
    spacing={2}
    alignItems="center"
    sx={{ mb: 2 }}
  >
    <Avatar sx={{ bgcolor: color }}>
      <Icon />
    </Avatar>
    <Box>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="h6">
        {count}
      </Typography>
    </Box>
  </Stack>
);

const ActiveUsers = ({ data }) => {
  return (
    <Card>
      <CardHeader
        avatar={<PeopleIcon color="primary" />}
        title="Active Users"
        subheader={`Total Users: ${data.total}`}
      />
      <CardContent>
        <UserTypeDisplay
          icon={LocalHospital}
          label="Doctors"
          count={data.doctors}
          color="#2196f3"
        />
        <UserTypeDisplay
          icon={Person}
          label="Receptionists"
          count={data.receptionists}
          color="#4caf50"
        />
        <UserTypeDisplay
          icon={AdminPanelSettings}
          label="Admins"
          count={data.admins}
          color="#f50057"
        />
      </CardContent>
    </Card>
  );
};

export default ActiveUsers;