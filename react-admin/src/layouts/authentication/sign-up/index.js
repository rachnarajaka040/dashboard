/**
 * =========================================================
 * Material Dashboard 2 React - v2.2.0
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2023 Creative Tim (https://www.creative-tim.com)
 *
 * Coded by www.creative-tim.com
 *
 * =========================================================
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 */

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import newlogo from "assets/images/ST-Main-Logo.png";
import { useTheme } from "@mui/material/styles"; // Add this import

// Logic from LoginForm
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  IconButton,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { apiURL } from "Constants/Constant";
const fadeInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const AnimatedCard = styled(Card)`
  animation: ${fadeInTop} 2s ease-in-out; // Adjust the animation duration and easing as needed
`;

function Cover() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const handleFormSubmit = async (values, { setErrors, setSubmitting }) => {
  //   try {
  //     const response = await axios.post(`${apiURL.baseURL}/api/auth/signin`, {
  //       userName: values.username,
  //       password: values.password,
  //     });
  //     console.log(response);
  //     console.log("Login success:", response.data);
  //     const token = response.data.result.token;
  //     console.log("Token:", token);
  //     sessionStorage.setItem("token", token);
  //     window.location.href = "/";
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     setErrors({ submit: "Invalid username or password" });
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("============",e)
    try {
      const response = await fetch(`${apiURL.baseURL}/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Admin created successfully:", data);
        // alert(" admin login successfully!");
        navigate("/dashboard");
      } else {
        if (response.status === 409) {
          alert("Agent with this username or email already exists!");
          console.error("Admin already exist:.", response.statusText);
        } else {
          alert("Failed to create admin:!");
          console.error("Failed to create subadmin:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error creating subadmin:", error.message);
    }
  };
  return (
    <CoverLayout image={bgImage}>
      <AnimatedCard>
        <Formik
        // initialValues={{
        //   username: "",
        //   password: "",
        //   submit: null,
        // }}
        // validationSchema={Yup.object().shape({
        //   username: Yup.string().max(255).required("Username is required"),
        //   password: Yup.string().max(255).required("Password is required"),
        // })}
        // onSubmit={handleFormSubmit}
        >
          {/* {({ errors, handleBlur, handleSubmit, isSubmitting, touched, values }) => ( */}
          <form noValidate onSubmit={handleSubmit}>
            <MDBox
              variant="gradient"
              borderRadius="lg"
              coloredShadow="success"
              mx={2}
              mt={-3}
              p={3}
              mb={1}
              textAlign="center"
              style={{ backgroundColor: "#21325D" }}
            >
              <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                <img src={newlogo} alt="" style={{ width: "100%" }}></img>
                Admin Login
              </MDTypography>
            </MDBox>
            <MDBox pt={1} pb={3} px={3}>
              <MDBox component="div" role="form">
                <MDBox mb={1}>
                  <MDInput
                    //error={Boolean(touched.username && errors.username)}
                    fullWidth
                    //helperText={touched.username && errors.username}
                    label="Username"
                    margin="normal"
                    name="username"
                    //onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={formData.username}
                    variant="outlined"
                  />
                </MDBox>
                <FormControl
                  fullWidth
                  //error={Boolean(touched.password && errors.password)}
                  sx={{ mt: theme.spacing(1), mb: theme.spacing(1) }}
                >
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    name="password"
                    //onBlur={handleBlur}
                    onChange={handleChange}
                    label="Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="madium"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {/* {touched.password && errors.password && (
                      <FormHelperText error id="standard-weight-helper-text">
                        {" "}
                        {errors.password}{" "}
                      </FormHelperText>
                    )} */}
                </FormControl>
                {/* <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Typography variant="subtitle2" color="primary" sx={{ textDecoration: "none" }}>
                      Forgot Password?
                    </Typography>
                  </Grid>
                </Grid> */}

                {/* {errors.submit && (
                    <Box mt={3}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Box>
                  )} */}

                <Box mt={1}>
                  <Button
                    //disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "#21325D", color: "white" }}
                  >
                    Log In
                  </Button>
                </Box>
              </MDBox>
            </MDBox>
          </form>
          {/* )} */}
        </Formik>
      </AnimatedCard>
    </CoverLayout>
  );
}

export default Cover;
