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
import { Button } from "@mui/material";
import axios from "axios";
// Images

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
        `${apiURL.baseURL}/skyTrails/api/admin/getchangeFlightRequestAgent`
      );
      setUserData(responseData?.data?.result.docs);
      console.log(responseData?.data?.result.docs + "flightcancel");
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
      { Header: "agency name", accessor: "date", align: "center" },
      { Header: "booking id", accessor: "agecncyname", width: "30%", align: "center" },
      { Header: "phone", accessor: "phone", align: "left", width: "40%" },
      { Header: "reason", accessor: "address", align: "left" },
      { Header: "pnr", accessor: "person", align: "left" },
      { Header: "Amount", accessor: "status", align: "center" },
      { Header: "origin", accessor: "approvestatus", align: "center", width: "45%" },
      { Header: "date of journey", accessor: "employed", align: "center" },
      { Header: "destination", accessor: "origin", align: "center" },
      { Header: "airline name", accessor: "mobile", align: "center" },
      { Header: "APPROVE", accessor: "approve", align: "center" },
    ],

    rows: userData.map((data) => ({
      author: (
        <Author
          // image={data?.agency_details?.document_details?.pan_card_document}
          name={`${data.userDetails.personal_details.first_name}  ${data.userDetails.personal_details.last_name}`}
          email={data?.userDetails.personal_details.email || "NA"}
        />
      ),
      date: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.userDetails.agency_details.agency_name || "NA"}
        </MDTypography>
      ),
      agecncyname: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.bookingId || "NA"}
        </MDTypography>
      ),
      phone: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.userDetails.personal_details.mobile.mobile_number || "NA"}
        </MDTypography>
      ),
      address: <MDBox ml={-1}>{data?.reason}</MDBox>,
      person: <MDBox ml={-1}>{data?.flightDetails?.pnr || "No Data"}</MDBox>,
      status: <MDBox ml={-1}>{data.flightDetails.totalAmount}</MDBox>,
      approvestatus: <MDBox ml={-1}>{data?.flightDetails?.origin}</MDBox>,
      employed: <MDBox ml={-1}>{data.flightDetails.airlineDetails[0].Origin.DepTime} </MDBox>,
      origin: <MDBox ml={-1}>{data.flightDetails.destination}</MDBox>,
      mobile: <MDBox ml={-1}>{data.flightDetails.airlineDetails[0].Airline.AirlineName}</MDBox>,
      approve: <Button sx={{ border: "1px solid #E73C33", color: "black" }}>Approve</Button>,
    })),
  };
}
