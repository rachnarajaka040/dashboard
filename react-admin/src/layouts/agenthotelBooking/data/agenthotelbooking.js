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
        `${apiURL.baseURL}/skytrails/api/admin/getAllHotelBookingListAgent`
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
      { Header: "Hotel Name", accessor: "address", align: "left" },
      { Header: "Hotel Id", accessor: "id", align: "left" },
      { Header: "Date of journey", accessor: "dateofj", align: "left" },
      { Header: "Amount", accessor: "totalAmount", align: "left" },

      { Header: "Desination", accessor: "person", align: "center" },
      { Header: "Rooms", accessor: "room", align: "center" },
    ],

    rows: userData.map((data) => ({
      author: (
        <Author
          // image={data?.agency_details?.document_details?.pan_card_document}
          name={
            `${data.userDetails.personal_details.first_name}${data.userDetails.personal_details.last_name}` ||
            "No Data"
          }
          email={
            data.userDetails ? `${data.userDetails.personal_details.email || "No Data"}` : "Empty"
          }
        />
      ),

      date: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.userDetails.agency_details.agency_name || "No Data"}{" "}
        </MDTypography>
      ),
      agecncyname: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.bookingId || "No Data"}
        </MDTypography>
      ),
      phone: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.userDetails.personal_details.mobile.mobile_number || "No Data"}
        </MDTypography>
      ),
      address: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.hotelName || "No Data"}
        </MDTypography>
      ),
      id: <MDBox ml={-1}>{data.hotelId || "No Data"}</MDBox>,
      person: <MDBox ml={-1}>{data.destination || "No Data"}</MDBox>,
      dateofj: <MDBox ml={-1}>{new Date(data.dateOfJourney).toDateString() || "No Data"}</MDBox>,
      totalAmount: <MDBox ml={-1}>{data.amount || "No Data"}</MDBox>,
      room: <MDBox ml={-1}>{data.room || "No Data"}</MDBox>,
    })),
  };
}
