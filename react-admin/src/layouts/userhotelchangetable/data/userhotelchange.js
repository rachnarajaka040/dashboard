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
        `${apiURL.baseURL}/skytrails/api/agent/getCancelHotelBooking`
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
      { Header: "booking id", accessor: "booking", align: "center" },
      { Header: "hotel id", accessor: "date", align: "center" },
      { Header: "phone", accessor: "phone", align: "left", width: "40%" },
      { Header: "reason", accessor: "address", align: "left" },
      { Header: "Amount", accessor: "amount", align: "left" },
      { Header: "origin", accessor: "origin", align: "left" },
      { Header: "desination", accessor: "destination", align: "left" },
      { Header: "Time", accessor: "time", align: "left" },
      { Header: "hotel name", accessor: "person", align: "center" },
      { Header: "Approve", accessor: "button", align: "center" },
    ],

    rows: userData.map((data) => ({
      author: (
        <Author
          // image={data?.agency_details?.document_details?.pan_card_document}
          name={
            `${data.userDetails.personal_details.first_name}  ${data.userDetails.personal_details.last_name}` ||
            "No Data"
          }
          email={data.userDetails.personal_details.email || "No Data"}
        />
      ),
      booking: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.bookingId || "No Data"}
        </MDTypography>
      ),
      date: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.hotelDetails.hotelId || "No Data"}
        </MDTypography>
      ),
      phone: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.userDetails.personal_details.mobile.mobile_number || "No Data"}{" "}
        </MDTypography>
      ),
      address: <MDBox ml={-1}>{data.reason || "No Data"}</MDBox>,
      amount: <MDBox ml={-1}>{data.hotelDetails.amount || "No Data"}</MDBox>,
      origin: <MDBox ml={-1}>{data.hotelDetails.CheckInDate || "No Data"}</MDBox>,
      destination: <MDBox ml={-1}>{data.hotelDetails.destination || "No Data"}</MDBox>,
      time: <MDBox ml={-1}>{data.hotelDetails.room || "No Data"}</MDBox>,
      person: <MDBox ml={-1}>{data.hotelDetails.hotelName || "No Data"}</MDBox>,
      button: <Button sx={{ border: "1px solid #E73C33", color: "black" }}>Approve</Button>,
    })),
  };
}
