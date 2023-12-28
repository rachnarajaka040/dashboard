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
        `${apiURL.baseURL}/skyTrails/api/admin/getCancelAgentHotelBooking`
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
      { Header: "Hotel ID", accessor: "id", align: "left" },
      { Header: "Amount", accessor: "amount", align: "left" },

      { Header: "Check in date", accessor: "approvestatus", align: "center", width: "45%" },
      { Header: "destination", accessor: "employed", align: "center" },
      { Header: "rooms", accessor: "origin", align: "center" },
      { Header: "Hotel name", accessor: "mobile", align: "center" },
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
      id: <MDBox ml={-1}>{data.hotelDetails.hotelId}</MDBox>,
      amount: <MDBox ml={-1}>{data.hotelDetails.amount}</MDBox>,
      person: <MDBox ml={-1}>{data?.pnr}</MDBox>,

      approvestatus: <MDBox ml={-1}>{data?.hotelDetails.CheckInDate}</MDBox>,
      employed: <MDBox ml={-1}>{data.hotelDetails.destination} </MDBox>,
      origin: <MDBox ml={-1}>{data.hotelDetails.room}</MDBox>,
      mobile: <MDBox ml={-1}>{data.hotelDetails.hotelName}</MDBox>,
      approve: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Approve
        </MDTypography>
      ),
    })),
  };
}
