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
import { apiURL } from "Constants/Constant";
import { useEffect, useState } from "react";
import axios from "axios";
// Images
import team2 from "assets/images/team-2.jpg";

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
  const [userData, setUserData] = useState([]);
  const fetchUserData = async () => {
    try {
      const responseData = await axios.get(`${apiURL.baseURL}/skyTrails/visa/getAllVisa`);
      setUserData(responseData?.data?.data);
      console.log(responseData?.data?.data + "visadata");
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return {
    columns: [
      { Header: "ID", accessor: "id", align: "center" },
      { Header: "Name", accessor: "agecncyname", align: "center" },
      { Header: "Email", accessor: "classification", align: "left", width: "10%" },
      { Header: "mobile", accessor: "address", align: "left" },
      { Header: "visa type", accessor: "person", align: "left" },
      { Header: "delete", accessor: "status", align: "center" },
    ],

    rows: userData.map((data) => ({
      id: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.id || "No Data"}
        </MDTypography>
      ),
      agecncyname: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.username || "No Data"}
        </MDTypography>
      ),

      classification: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.email}
        </MDTypography>
      ),
      address: <MDBox ml={-1}>{data?.mobile}</MDBox>,
      person: <MDBox ml={-1}>{data.visatype || "No Data"}</MDBox>,

      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Approve
        </MDTypography>
      ),
    })),
  };
}
