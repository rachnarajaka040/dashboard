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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { apiURL } from "Constants/Constant";
import { useNavigate } from "react-router-dom";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function AddMarkup() {
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    hotelMarkup: 0, // Assuming markup values are numeric
    flightMarkup: 0,
    busMarkup: 0,
    packageMarkup: 0,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
    // const { name, value } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, "Markup Input Data");
    const isAnyValueNotGreaterThanZero = Object.values(formData).some((value) => value <= 0);

    if (isAnyValueNotGreaterThanZero) {
      // alert("All markup values must be greater than 0");
      return;
    }
    try {
      const response = await fetch(`${apiURL.baseURL}/skyTrails/api/admin/createMarkup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Markup created successfully:", data);
        alert("Markup created successfully!");
        navigate("/dashboard");
      } else {
        if (response.status === 409) {
          alert("Markup with this username or email already exists!");
          console.error("Markup already exists:", response.statusText);
        } else {
          alert("Failed to create markup!");
          console.error("Failed to create markup:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error creating markup:", error.message);
    }
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <from onSubmit={handleSubmit}>
          <MDBox
            variant="gradient"
            style={{ backgroundColor: "#21325D" }}
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Add Markup
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="flight markup"
                  name="flightMarkup"
                  value={formData.flightMarkup}
                  onChange={handleChange}
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="hotel markup"
                  name="hotelMarkup"
                  value={formData.hotelMarkup}
                  onChange={handleChange}
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="bus markup"
                  name="busMarkup"
                  value={formData.busMarkup}
                  onChange={handleChange}
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="package markup"
                  name="packageMarkup"
                  value={formData.packageMarkup}
                  onChange={handleChange}
                  fullWidth
                />
              </MDBox>

              <MDBox mt={4} mb={1}>
                <MDButton
                  variant="gradient"
                  fullWidth
                  type="submit"
                  style={{ backgroundColor: "#21325D", color: "white" }}
                >
                  Add Markup
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </from>
      </Card>
    </CoverLayout>
  );
}

export default AddMarkup;
