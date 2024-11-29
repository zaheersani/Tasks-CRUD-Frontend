import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import { TextField, Button, Box, Typography } from '@mui/material';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(formData);
      console.log("Token Generated: " + data.token);
      localStorage.setItem('token', data.token);
      let storedToken = localStorage.getItem('token');
      console.log("Token Stored: " + storedToken);
      navigate('/dashboard');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>
        <Button
          variant="text"
          color="secondary"
          onClick={() => navigate('/signup')}
          fullWidth
        >
          Don't have an account? Signup
        </Button>
      </form>
    </Box>
  );
};

export default Login;
