import React from 'react';
import axios from 'axios';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';

//  third party
import * as Yup from 'yup';
import { Formik } from 'formik';
// import { Link } from 'react-router-dom';
// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { apiURL } from '../../constants/constants';

// import Google from 'assets/images/social-google.svg';

// ==============================|| FIREBASE LOGIN ||============================== //

const LoginForm = ({ ...rest }) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // //////////////////////////api integration////////////////////////////////

  const handleFormSubmit = async (values, { setErrors, setSubmitting }) => {
    try {
      // Make a POST request to your login API endpoint
      const response = await axios.post(`${apiURL.baseURL}/skytrails/api/subAdmin/subAdminLogin`, {
        userName: values.username,
        password: values.password 
      });
      console.log(response);
      console.log('Login success:', response.data);
      const token = response.data.result.token;

      console.log('Token:', token);

      sessionStorage.setItem('token', token);
      window.location.href = '/dashboard/default';
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      setErrors({ submit: 'Invalid username or password' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          username: '', // Change the field name to 'username'
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required('Username is required'), // Update the validation for the new 'username' field
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={handleFormSubmit}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <TextField
              error={Boolean(touched.username && errors.username)} // Update references to 'email' to 'username'
              fullWidth
              helperText={touched.username && errors.username} // Update references to 'email' to 'username'
              label="Username" // Update the label to 'Username'
              margin="normal"
              name="username" // Change the field name to 'username'
              onBlur={handleBlur}
              onChange={handleChange}
              type="text" // Assuming 'username' is alphanumeric, change to 'text' or 'password' as needed
              value={values.username} // Change references to 'email' to 'username'
              variant="outlined"
            />

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text">
                  {' '}
                  {errors.password}{' '}
                </FormHelperText>
              )}
            </FormControl>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="subtitle2" color="primary" sx={{ textDecoration: 'none' }}>
                  Forgot Password?
                </Typography>
              </Grid>
            </Grid>

            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box mt={2}>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={handleFormSubmit}
              >
                Log In
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
