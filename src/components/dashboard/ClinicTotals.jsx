import { Card, CardContent, CardHeader, Typography, Box, LinearProgress } from '@mui/material';
import { LocalHospital as ClinicIcon } from '@mui/icons-material';

const ClinicTotals = ({ data }) => {
  const activePercentage = (data.active / data.total) * 100;

  return (
    <Card>
      <CardHeader
        avatar={<ClinicIcon color="primary" />}
        title="Clinic Statistics"
        subheader={`Total Clinics: ${data.total}`}
      />
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Active Clinics
          </Typography>
          <Typography variant="h6">
            {data.active}
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={activePercentage} 
            color="success"
            sx={{ mt: 1 }}
          />
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary">
            Inactive Clinics
          </Typography>
          <Typography variant="h6">
            {data.inactive}
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={(data.inactive / data.total) * 100} 
            color="error"
            sx={{ mt: 1 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ClinicTotals;