import { useState } from 'react';
import { Card, CardContent, CardHeader, Box, ButtonGroup, Button } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PerformanceMetrics = () => {
  const [timeRange, setTimeRange] = useState('weekly');

  // Mock data - Replace with actual API data
  const data = {
    daily: [
      { name: 'Mon', tokens: 240, waitTime: 15, patients: 180 },
      { name: 'Tue', tokens: 300, waitTime: 20, patients: 220 },
      { name: 'Wed', tokens: 280, waitTime: 18, patients: 200 },
      { name: 'Thu', tokens: 320, waitTime: 22, patients: 250 },
      { name: 'Fri', tokens: 290, waitTime: 19, patients: 210 },
    ],
    weekly: [
      { name: 'Week 1', tokens: 1500, waitTime: 18, patients: 1200 },
      { name: 'Week 2', tokens: 1800, waitTime: 20, patients: 1400 },
      { name: 'Week 3', tokens: 1600, waitTime: 17, patients: 1300 },
      { name: 'Week 4', tokens: 1900, waitTime: 21, patients: 1500 },
    ],
    monthly: [
      { name: 'Jan', tokens: 6500, waitTime: 19, patients: 5200 },
      { name: 'Feb', tokens: 7200, waitTime: 21, patients: 5800 },
      { name: 'Mar', tokens: 6800, waitTime: 18, patients: 5500 },
      { name: 'Apr', tokens: 7500, waitTime: 20, patients: 6000 },
    ],
  };

  return (
    <Card>
      <CardHeader
        title="Performance Metrics"
        subheader="Token and patient statistics"
        action={
          <ButtonGroup size="small">
            <Button
              variant={timeRange === 'daily' ? 'contained' : 'outlined'}
              onClick={() => setTimeRange('daily')}
            >
              Daily
            </Button>
            <Button
              variant={timeRange === 'weekly' ? 'contained' : 'outlined'}
              onClick={() => setTimeRange('weekly')}
            >
              Weekly
            </Button>
            <Button
              variant={timeRange === 'monthly' ? 'contained' : 'outlined'}
              onClick={() => setTimeRange('monthly')}
            >
              Monthly
            </Button>
          </ButtonGroup>
        }
      />
      <CardContent>
        <Box sx={{ height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data[timeRange]}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="tokens" name="Tokens Issued" fill="#2196f3" />
              <Bar yAxisId="left" dataKey="patients" name="Patients Seen" fill="#4caf50" />
              <Bar yAxisId="right" dataKey="waitTime" name="Avg Wait Time (min)" fill="#f50057" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PerformanceMetrics;