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
        `${apiURL.baseURL}/skyTrails/api/admin/getCancelUserHotelBooking`
      );
      setUserData(responseData?.data?.result.docs);
      console.log(responseData?.data?.result.docs + "hotelcancel");
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const calculateStayDuration = (checkInDate, checkOutDate) => {
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const timeDifference = endDate - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };
  return {
    columns: [
      { Header: "Booking ID", accessor: "author", width: "30%", align: "center" },
      { Header: "Name", accessor: "agecncyname", width: "30%", align: "center" },
      { Header: "phone", accessor: "classification", align: "left", width: "40%" },
      { Header: "reason", accessor: "address", align: "left" },
      { Header: "Hotel Id", accessor: "person", align: "left" },
      { Header: "Amount", accessor: "status", align: "center" },
      { Header: "check in date", accessor: "approvestatus", align: "center", width: "45%" },
      { Header: "Stay Duration (Days)", accessor: "employed", align: "center" },
      { Header: "destination", accessor: "origin", align: "center" },
      { Header: "HotelName", accessor: "mobile", align: "center" },
      { Header: "Approve", accessor: "approve", align: "left" },
    ],

    rows: userData.map((data) => ({
      author: (
        <Author
          // image={data?.agency_details?.document_details?.pan_card_document}
          name={data?.bookingId}
        />
      ),
      agecncyname: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.userDetails.username || "No Data"}
        </MDTypography>
      ),
      // id: (
      //   <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
      //     {data?.userDetails.phone.mobile_number || "No Data"}
      //   </MDTypography>
      // ),
      classification: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.userDetails?.phone?.mobile_number}
        </MDTypography>
      ),

      // phone: (
      //   <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
      //     {data.hotelDetails.pnr || "No Data "}
      //   </MDTypography>
      // ),
      address: <MDBox ml={-1}>{data?.reason}</MDBox>,
      person: <MDBox ml={-1}>{data.hotelDetails?.hotelId || "No Data"}</MDBox>,
      status: <MDBox ml={-1}>{data.hotelDetails?.amount || " No Data"}</MDBox>,
      approvestatus: <MDBox ml={-1}>{data.hotelDetails?.CheckInDate}</MDBox>,
      employed: (
        <MDBox ml={-1}>
          {calculateStayDuration(data.hotelDetails?.CheckInDate, data.hotelDetails?.CheckOutDate)}{" "}
        </MDBox>
      ),
      origin: <MDBox ml={-1}>{data.hotelDetails?.cityName}</MDBox>,
      mobile: <MDBox ml={-1}>{data.hotelDetails?.hotelName}</MDBox>,

      approve: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Approve
        </MDTypography>
      ),
    })),
  };
}
