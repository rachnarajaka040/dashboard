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
        `${apiURL.baseURL}/skytrails/api/admin/getAllBusBookingList`
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
      { Header: "Bus Type", accessor: "address", align: "left" },
      { Header: "Destination", accessor: "destination", align: "left" },
      { Header: "origin", accessor: "origin", align: "left" },
      { Header: "Bus Name", accessor: "busnname", align: "left" },

      { Header: "Date of journey", accessor: "id", align: "left" },
      { Header: "Pnr", accessor: "amount", align: "left" },

      { Header: "Bus seat", accessor: "person", align: "center" },
    ],

    rows: userData.map((data) => ({
      author: (
        <Author
          // image={data?.agency_details?.document_details?.pan_card_document}
          name={data.userDetails?.username || "No Data"}
          email={data.passenger[0]?.Email || "No Data"}
        />
      ),

      date: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.userDetails?.username || "No Data"}
        </MDTypography>
      ),
      agecncyname: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.busId || "No Data"}
        </MDTypography>
      ),
      phone: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.userDetails?.phone.mobile_number || "No Data"}
        </MDTypography>
      ),
      destination: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.destination || "No Data"}
        </MDTypography>
      ),
      origin: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.origin || "No Data"}
        </MDTypography>
      ),
      busnname: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.busName || "No Data"}
        </MDTypography>
      ),
      address: <MDBox ml={-1}>{data.busType || "No Data"}</MDBox>,
      id: <MDBox ml={-1}>{new Date(data.dateOfJourney).toDateString() || "No Data"}</MDBox>,
      amount: <MDBox ml={-1}>{data.pnr || "No Data"}</MDBox>,
      person: <MDBox ml={-1}>{data.noOfSeats || "No Data"}</MDBox>,
    })),
  };
}
