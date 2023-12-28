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
        `${apiURL.baseURL}/skytrails/api/admin/getAllHotelBookingList`
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

      { Header: "gender", accessor: "person", align: "center" },
    ],

    rows: userData.map((data) => ({
      author: (
        <Author
          // image={data?.agency_details?.document_details?.pan_card_document}
          name={data.name || "No data"}
          email={data.email || "No Data"}
        />
      ),

      date: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.userDetails?.username || "No Data"}
        </MDTypography>
      ),
      agecncyname: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.hotelId || "No Data"}
        </MDTypography>
      ),
      phone: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.phone || "N/A"}
        </MDTypography>
      ),
      address: <MDBox ml={-1}>{new Date(data.CheckInDate).toDateString() || "No Data"}</MDBox>,
      id: <MDBox ml={-1}>{new Date(data.CheckOutDate).toDateString() || "No Data"}</MDBox>,
      amount: <MDBox ml={-1}>{data.hotelName || "No Data"}</MDBox>,
      person: <MDBox ml={-1}>{data.cityName || "No Data"}</MDBox>,
    })),
  };
}
