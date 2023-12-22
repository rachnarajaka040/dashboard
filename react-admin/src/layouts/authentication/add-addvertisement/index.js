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
import DatePicker from "react-datepicker";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { useState } from "react";
import "./Style.css";
import Icon from "@mui/material/Icon";
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
// Images

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

function AddvertiseMentForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const isDateDisabled = (date) => date >= new Date();

  return (
    <div className="mainimg">
      <CoverLayout>
        <AnimatedCard>
          <Card style={{ marginTop: "-75px" }}>
            <MDTypography
              variant="h4"
              fontWeight="medium"
              textAlign="center"
              className="heading"
              mt={1}
            >
              <MDBox
                variant="gradient"
                borderRadius="lg"
                coloredShadow="success"
                mx={2}
                mt={-7}
                p={1}
                mb={1}
                textAlign="center"
                className="main"
              >
                <MDTypography variant="h4" color="white" mt={1}>
                  Create Addvertisement
                </MDTypography>
              </MDBox>
            </MDTypography>

            <MDBox pt={4} pb={3} px={3} bgColor="white">
              <MDBox component="form" role="form">
                <MDBox mb={1}>
                  <MDInput
                    type="name"
                    label="Title"
                    variant="standard"
                    fullWidth
                    startAdornment={<Icon>title</Icon>}
                  />
                </MDBox>
                <MDBox mb={1}>
                  <MDInput
                    type="email"
                    label="Description"
                    variant="standard"
                    fullWidth
                    startAdornment={<Icon>description</Icon>}
                  />
                </MDBox>
                <MDBox mb={1} className="datedivimg">
                  <MDInput
                    type="file"
                    variant="standard"
                    className="img"
                    startAdornment={<Icon>image</Icon>}
                  />
                </MDBox>

                <MDBox mb={1} className="datediv">
                  <DatePicker
                    placeholderText="Select Start Date"
                    dateFormat="MMMM d, yyyy"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={startDate}
                    filterDate={isDateDisabled}
                    className="date"
                    startAdornment={<Icon>event</Icon>}
                  />
                </MDBox>
                <MDBox mb={1} className="datediv">
                  <DatePicker
                    placeholderText="Select End Date"
                    dateFormat="MMMM d, yyyy"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsStart
                    startDate={endDate}
                    endDate={endDate}
                    filterDate={isDateDisabled}
                    className="date"
                    startAdornment={<Icon style={{ color: "black" }}>event</Icon>}
                  />
                </MDBox>
                <MDBox mb={1}>
                  <MDInput
                    type="text"
                    label="Remaining Days:"
                    variant="standard"
                    fullWidth
                    startAdornment={<Icon>Days</Icon>}
                  />
                </MDBox>

                <MDBox mt={2} mb={1}>
                  <Link to="/dashboard">
                    <MDButton variant="gradient" fullWidth className="btn">
                      Create AddvertiseMent
                    </MDButton>
                  </Link>
                </MDBox>
              </MDBox>
            </MDBox>
          </Card>
        </AnimatedCard>
      </CoverLayout>
    </div>
  );
}

export default AddvertiseMentForm;
