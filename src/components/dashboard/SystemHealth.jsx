import { Card, CardContent, CardHeader, Typography, Box, CircularProgress } from '@mui/material';
import { MonitorHeart } from '@mui/icons-material';

const HealthIndicator = ({ label, value, color }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
    <Box sx={{ position: 'relative', display: 'inline-flex', mr: 2 }}>
      <CircularProgress
        variant="determinate"
        value={90}
        size={40}
        thickness={4}
        sx={{ color }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {value}
        </Typography>
      </Box>
    </Box>
    <Box>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body1">
        {value}
      </Typography>
    </Box>
  </Box>
);

const SystemHealth = ({ data }) => {
  return (
    <Card>
      <CardHeader
        avatar={<MonitorHeart color="primary" />}
        title="System Health"
        subheader={`Status: ${data.status}`}
      />
      <CardContent>
        <HealthIndicator
          label="Uptime"
          value={data.uptime}
          color="#4caf50"
        />
        <HealthIndicator
          label="Response Time"
          value={data.responseTime}
          color="#2196f3"
        />
        <HealthIndicator
          label="Active Connections"
          value={data.activeConnections}
          color="#f50057"
        />
      </CardContent>
    </Card>
  );
};

export default SystemHealth;