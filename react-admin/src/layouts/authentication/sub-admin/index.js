/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 skytrails (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { apiURL } from "Constants/Constant";
import { useNavigate } from "react-router-dom";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import { useState } from "react";
// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
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
function SubAdmin() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile_number: "",
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
      const response = await fetch(`${apiURL.baseURL}/skytrails/api/subAdmin/createSubAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log('Subadmin created successfully:', data);
        alert("Subadmin created successfully!");
      } else {
        if (response.status === 409) {
          alert("Subadmin with this username or email already exists!");
          console.error("SubAdmin already exist:.", response.statusText);
        } else {
          alert("Failed to create subadmin:!");
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
        <form className="subadmin-form" onSubmit={handleSubmit}>
          <Card>
            <MDBox
              variant="gradient"
              style={{ backgroundColor: "#21325D" }}
              borderRadius="lg"
              coloredShadow="success"
              mx={2}
              mt={-7}
              p={3}
              mb={1}
              textAlign="center"
            >
              <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                Create SubAdmin
              </MDTypography>
            </MDBox>
            <MDBox pt={4} pb={3} px={3}>
              <MDBox component="form" role="form">
                <MDBox mb={1}>
                  <MDInput
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    label="User Name"
                    variant="standard"
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={1}>
                  <MDInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    label="Email"
                    variant="standard"
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={1}>
                  <MDInput
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    label="Password"
                    variant="standard"
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={1}>
                  <MDInput
                    type="phone"
                    id="mobile_number"
                    name="mobile_number"
                    value={formData.mobile_number}
                    onChange={handleChange}
                    label="Mobile Number"
                    variant="standard"
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={1}>
                  <MDInput
                    type="text"
                    id="authType"
                    name="authType"
                    value={formData.authType}
                    onChange={handleChange}
                    label="Auth Type"
                    variant="standard"
                    fullWidth
                  />
                </MDBox>

                <MDBox mb={1}>
                  <Link to="/dashboard">
                    <MDButton
                      variant="gradient"
                      style={{ backgroundColor: "#21325D", color: "white" }}
                      fullWidth
                    >
                      create subadmin
                    </MDButton>
                  </Link>
                </MDBox>
                {/* <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox> */}
              </MDBox>
            </MDBox>
          </Card>
        </form>
      </AnimatedCard>
    </CoverLayout>
  );
}

export default SubAdmin;
