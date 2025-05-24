  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import {
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Alert,
  } from '@mui/material';
  import { useAuth } from '../contexts/AuthContext';
  import { UserRoles } from '../contexts/AuthContext';

  const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');

      try {
        const mockUser = {
          id: '1',
          name: 'John Doe',
          email: formData.email,
          role: UserRoles.SUPER_ADMIN,
          clinicId: formData.email.includes('clinic') ? '1' : null,
        };

        login(mockUser);
        navigate('/');
      } catch (err) {
        setError('Invalid credentials');
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center text-white px-4 font-sans">
        <div className="w-full max-w-sm">
      <Card
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: 2,
          p: 3,
          boxShadow: 1, // MUI shadow level
          border: '1px solid #444',
        }}
      >

            <CardContent>
              <Typography component="h1" variant="h5" align="center" gutterBottom>
                Leada Dashboard Login
              </Typography>
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formData.email}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: '#aaa' } }}
                  InputProps={{
                    style: { color: '#fff' },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: '#aaa' } }}
                  InputProps={{
                    style: { color: '#fff' },
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: '#333',
                    '&:hover': {
                      backgroundColor: '#555',
                    },
                  }}
                >
                  Sign In
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  export default Login;
