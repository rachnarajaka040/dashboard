/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Button } from "@mui/material";

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
      const responseData = await axios.get(
        `${apiURL.baseURL}/skytrails/api/admin/getchangeBusRequestAgent`
      );
      setUserData(responseData?.data?.result.docs);
      console.log(responseData?.data?.result.docs + "buschange");
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return {
    columns: [
      { Header: "agents", accessor: "author", width: "30%", align: "left" },
      { Header: "bus id", accessor: "date", align: "center" },
      { Header: "phone", accessor: "phone", align: "left", width: "40%" },
      { Header: "reason", accessor: "address", align: "left" },
      { Header: "pnr", accessor: "id", align: "left" },
      { Header: "Amount", accessor: "amount", align: "left" },
      { Header: "check in date", accessor: "origin", align: "left" },
      { Header: "desination", accessor: "destination", align: "left" },
      { Header: "rooms", accessor: "time", align: "left" },
      { Header: "bus type", accessor: "person", align: "center" },
      { Header: "Approve", accessor: "button", align: "center" },
    ],

    rows: userData.map((data) => ({
      author: (
        <Author
          // image={data?.agency_details?.document_details?.pan_card_document}
          name={
            `${data.userDetails.personal_details.first_name} ${data.userDetails.personal_details.last_name}` ||
            "No Data"
          }
          email={data.userDetails.personal_details.email || "No Data"}
        />
      ),
      date: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.busDetails.busId || "No Data"}
        </MDTypography>
      ),
      phone: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.userDetails.personal_details.mobile.mobile_number || "No Data"}
        </MDTypography>
      ),
      address: <MDBox ml={-1}>{data.reason || "No Data"}</MDBox>,
      id: <MDBox ml={-1}>{data.busDetails.pnr || "No Data"}</MDBox>,
      amount: <MDBox ml={-1}>{data.busDetails.amount || "No Data"}</MDBox>,
      origin: <MDBox ml={-1}>{data.busDetails.origin || "No Data"}</MDBox>,
      destination: <MDBox ml={-1}>{data.busDetails.destination || "No Data"}</MDBox>,
      time: <MDBox ml={-1}>{data.busDetails.departureTime || "No Data"}</MDBox>,
      person: <MDBox ml={-1}>{data.busDetails.busType || "No Data"}</MDBox>,
      button: <Button sx={{ border: "1px solid #E73C33", color: "black" }}>Approve</Button>,
    })),
  };
}
