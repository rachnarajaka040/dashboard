/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images

import { apiURL } from "Constants/Constant";
import { useEffect, useState } from "react";
import axios from "axios";
export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );
  const [agentData, setagentData] = useState([]);

  const fetchagentdata = async () => {
    try {
      const responseData = await axios.get(
        `${apiURL.baseURL}/skytrails/api/admin/getAgents?page=1&size=5&usersType1=AGENT&search=`
      );
      setagentData(responseData?.data?.data);
      // console.log(responseData.data.data, "apiadat");
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };
  useEffect(() => {
    fetchagentdata();
  }, []);

  return {
    columns: [
      { Header: "agents", accessor: "author", width: "30%", align: "left" },
      { Header: "id", accessor: "agecncyname", width: "30%", align: "center" },
      { Header: "phone", accessor: "classification", align: "left", width: "40%" },
      { Header: "user type", accessor: "address", align: "left" },
      { Header: "location", accessor: "person", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: " approve status", accessor: "approvestatus", align: "center", width: "45%" },
      { Header: "otp verified", accessor: "employed", align: "center" },
      { Header: "reason", accessor: "mobile", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        agecncyname: <Job description="Organization" />,
        classification: <Job description="Organization" />,
        address: <Job description="Organization" />,
        person: <Job description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="block" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        approvestatus: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="block" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: <Job description="Organization" />,
        mobile: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        Password: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        flight: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        hotel: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        bus: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        holiday: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        vendor: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
