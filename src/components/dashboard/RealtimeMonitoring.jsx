import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, Grid, Typography, Box } from '@mui/material';
import { Timer, Group, LocalHospital } from '@mui/icons-material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StatCard = ({ icon: Icon, title, value, color }) => (
  <Box sx={{ p: 2, bgcolor: `${color}15`, borderRadius: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Icon sx={{ color, mr: 1 }} />
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
    </Box>
    <Typography variant="h4">
      {value}
    </Typography>
  </Box>
);

const RealtimeMonitoring = ({ data }) => {
  // Mock data for the chart - Replace with real-time WebSocket data
  const [chartData, setChartData] = useState([
    { time: '09:00', patients: 20 },
    { time: '10:00', patients: 35 },
    { time: '11:00', patients: 45 },
    { time: '12:00', patients: 30 },
    { time: '13:00', patients: 25 },
    { time: '14:00', patients: 40 },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => {
        const newData = [...prevData];
        if (newData.length > 6) newData.shift();
        const lastValue = newData[newData.length - 1].patients;
        const newValue = Math.max(10, Math.min(50, lastValue + Math.floor(Math.random() * 11) - 5));
        newData.push({ time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }), patients: newValue });
        return newData;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader
        title="Real-time Monitoring"
        subheader="Live clinic activity"
      />
      <CardContent>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <StatCard
              icon={Group}
              title="Active Patients"
              value={data.activePatients}
              color="#2196f3"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatCard
              icon={Timer}
              title="Average Wait Time"
              value={data.avgWaitTime}
              color="#f50057"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatCard
              icon={LocalHospital}
              title="Doctors on Duty"
              value={data.doctorsOnDuty}
              color="#4caf50"
            />
          </Grid>
        </Grid>

        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="patients"
                stroke="#2196f3"
                fill="#2196f3"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RealtimeMonitoring;