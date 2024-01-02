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
import { apiURL } from "Constants/Constant";
import { useNavigate } from "react-router-dom";
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
  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
    startDate: "",
    endDate: "",
    remainingDays: "",
    images: "",
  });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //     remainingDays: calculateRemainingDays(formValues.startDate, formValues.endDate),
  //   });
  // };
  const handleInputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
      remainingDays: calculateRemainingDays(
        name === "startDate" ? value : formValues.startDate,
        name === "endDate" ? value : formValues.endDate
      ),
    });
  };
  const handleFileChange = (e) => {
    // console.log("e==============>>>>", e)
    const file = e.target.files[0];
    // console.log("file", file)
    setFormValues({
      ...formValues,
      images: file,
    });
  };
  const handleTitleChange = (e) => {
    setFormValues({
      ...formValues,
      title: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setFormValues({
      ...formValues,
      content: e.target.value,
    });
  };
  const calculateRemainingDays = (startDate, endDate) => {
    // Calculate the remaining days here
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDifference = end - start;
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return daysDifference >= 0 ? daysDifference : 0;
    }
    return "";
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      formData.append("title", formValues.title);
      formData.append("content", formValues.content);
      formData.append("startDate", formValues.startDate);
      formData.append("endDate", formValues.endDate);
      formData.append("remainingDays", formValues.remainingDays);
      formData.append("images", formValues.images);

      const response = await axios.post(
        `${apiURL.baseURL}/skyTrails/api/admin/createadvertisment`,
        formData,
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        // console.log('Advertisement created successfully:', response.data);
        alert("Advertisement created successfully!");
        navigate("/admin/dashboard"); // Redirect to admin dashboard
      } else {
        alert("Failed to create Advertisement!");
        console.error("Failed to create Advertisement:", response.statusText);
      }
      // console.log('API Response:', response.data);
      // Handle success or further actions as needed
    } catch (error) {
      console.error("API Error:", error.response.data);
      // Handle error or show error message
    }
  };

  return (
    <div className="mainimg">
      <CoverLayout>
        <AnimatedCard>
          <form onSubmit={handleSubmit} className="advertisement-form">
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
                      type="text"
                      label="Title"
                      variant="standard"
                      fullWidth
                      name="title"
                      value={formValues.title}
                      onChange={handleTitleChange} // Update here
                      startAdornment={<Icon>title</Icon>}
                    />
                  </MDBox>
                  <MDBox mb={1}>
                    <MDInput
                      type="text"
                      label="Description"
                      variant="standard"
                      fullWidth
                      name="content"
                      value={formValues.content}
                      onChange={handleDescriptionChange} // Update here
                      startAdornment={<Icon>Content</Icon>}
                    />
                  </MDBox>

                  <MDBox mb={1} className="datedivimg">
                    <MDInput
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      startAdornment={<Icon>image</Icon>}
                    />
                  </MDBox>

                  <MDBox mb={1} className="datediv">
                    <DatePicker
                      placeholderText="Select Start Date"
                      dateFormat="MMMM d, yyyy"
                      type="date"
                      name="startDate"
                      selected={formValues.startDate} // Update here
                      onChange={(date) => handleInputChange("startDate", date)}
                      className="date"
                      startAdornment={<Icon>event</Icon>}
                    />
                  </MDBox>
                  <MDBox mb={1} className="datediv">
                    <DatePicker
                      placeholderText="Select End Date"
                      dateFormat="MMMM d, yyyy"
                      type="date"
                      name="endDate"
                      selected={formValues.endDate} // Update here
                      onChange={(date) => handleInputChange("endDate", date)}
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
                      name="remainingDays"
                      value={formValues.remainingDays}
                      onChange={handleInputChange}
                      startAdornment={<Icon>Days</Icon>}
                    />
                  </MDBox>

                  <MDBox mt={2} mb={1}>
                    <Link to="/dashboard">
                      <MDButton
                        variant="gradient"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        fullWidth
                        className="btn"
                      >
                        Create AddvertiseMent
                      </MDButton>
                    </Link>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </form>
        </AnimatedCard>
      </CoverLayout>
    </div>
  );
}

export default AddvertiseMentForm;
