/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

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

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

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
function Admin() {
  return (
    <CoverLayout image={bgImage}>
      <AnimatedCard>
        <Card>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="success"
            mx={2}
            mt={-7}
            p={3}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Create Agent
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={1}>
                <MDInput type="name" label="User Name" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={1}>
                <MDInput type="email" label="Email" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={1}>
                <MDInput type="password" label="Password" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={1}>
                <MDInput type="phone" label="Mobile Number" variant="standard" fullWidth />
              </MDBox>

              <MDBox mt={2} mb={1}>
                <Link to="/dashboard">
                  <MDButton variant="gradient" color="info" fullWidth>
                    create agent
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
      </AnimatedCard>
    </CoverLayout>
  );
}

export default Admin;
