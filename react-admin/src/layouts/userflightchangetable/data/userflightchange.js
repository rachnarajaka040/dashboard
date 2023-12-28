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
        `${apiURL.baseURL}/skyTrails/api/admin/getUserchangeFlightRequest`
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
      { Header: "Booking id", accessor: "id", width: "30%", align: "left" },
      { Header: "Reason", accessor: "date", align: "center" },
      { Header: "PNR", accessor: "agecncyname", width: "30%", align: "center" },
      { Header: "Amount", accessor: "phone", align: "left", width: "40%" },
      // { Header: "reason", accessor: "address", align: "left" },
      { Header: "Phone", accessor: "person", align: "left" },
      // { Header: "Amount", accessor: "status", align: "center" },
      { Header: "origin", accessor: "approvestatus", align: "center", width: "45%" },
      { Header: "destination", accessor: "employed", align: "center" },
      { Header: "date of journey", accessor: "origin", align: "center" },
      { Header: "airline name", accessor: "mobile", align: "center" },
      { Header: "APPROVE", accessor: "approve", align: "center" },
    ],

    rows: userData.map((data) => ({
      author: (
        <Author
          name={`${data.userDetails.username}` || "No Data"}
          email={data.userDetails.email || "No Data"}
        />
      ),
      id: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.bookingId}
        </MDTypography>
      ),
      date: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.reason || "No Data"}
        </MDTypography>
      ),
      agecncyname: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {(data.flightDetails && data.flightDetails.pnr) || "No Data"}
        </MDTypography>
      ),
      phone: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {(data.flightDetails && data.flightDetails.totalAmount) || "No Data"}
        </MDTypography>
      ),
      // address: <MDBox ml={-1}>{data?.reason}</MDBox>,
      person: <MDBox ml={-1}>{data.userDetails.phone.mobile_number || "No Data"}</MDBox>,
      // status: <MDBox ml={-1}>{data.flightDetails.totalAmount}</MDBox>,
      approvestatus: (
        <MDBox ml={-1}>{(data.flightDetails && data.flightDetails.origin) || "No Data"}</MDBox>
      ),
      employed: (
        <MDBox ml={-1}>
          {(data.flightDetails && data.flightDetails.destination) || "No Data"}{" "}
        </MDBox>
      ),
      origin: (
        <MDBox ml={-1}>
          {(data.flightDetails && data.flightDetails.airlineDetails[0].Origin.DepTime) || "No Data"}
        </MDBox>
      ),
      mobile: (
        <MDBox ml={-1}>
          {(data.flightDetails && data.flightDetails.airlineDetails[0].Airline.AirlineName) ||
            "No Data"}
        </MDBox>
      ),
      approve: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Approve
        </MDTypography>
      ),
    })),
  };
}
