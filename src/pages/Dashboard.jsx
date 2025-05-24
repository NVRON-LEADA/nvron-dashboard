import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import {
  ClinicTotals,
  ActiveUsers,
  SystemHealth,
  RealtimeMonitoring,
  PerformanceMetrics,
  SubscriptionOverview,
} from '../components/dashboard';

const Dashboard = () => {
  // Mock data - Replace with actual API calls
  const dashboardData = {
    clinicStats: {
      total: 150,
      active: 130,
      inactive: 20,
    },
    userStats: {
      total: 450,
      doctors: 200,
      receptionists: 150,
      admins: 100,
    },
    systemHealth: {
      status: 'Healthy',
      uptime: '99.9%',
      responseTime: '120ms',
      activeConnections: 250,
    },
    realtimeData: {
      activePatients: 320,
      avgWaitTime: '15 mins',
      doctorsOnDuty: 45,
    },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {/* Overview Statistics */}
        <Grid item xs={12} md={4}>
          <ClinicTotals data={dashboardData.clinicStats} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ActiveUsers data={dashboardData.userStats} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SystemHealth data={dashboardData.systemHealth} />
        </Grid>

        {/* Real-time Monitoring */}
        <Grid item xs={12}>
          <RealtimeMonitoring data={dashboardData.realtimeData} />
        </Grid>

        {/* Performance Metrics */}
        <Grid item xs={12} md={8}>
          <PerformanceMetrics />
        </Grid>

        {/* Subscription Overview */}
        <Grid item xs={12} md={4}>
          <SubscriptionOverview />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;