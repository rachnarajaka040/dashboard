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
        `${apiURL.baseURL}/skytrails/api/admin/getAllFlightBookingListAgent`
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
      { Header: "pnr", accessor: "pnr", width: "30%", align: "center" },
      { Header: "phone", accessor: "phone", align: "left", width: "40%" },
      { Header: "reason", accessor: "address", align: "left" },
      { Header: "Date Of journey", accessor: "id", align: "left" },
      { Header: "Origin", accessor: "amount", align: "left" },
      { Header: "TotalAmount", accessor: "totalAmount", align: "left" },

      { Header: "Desination", accessor: "person", align: "center" },
    ],

    rows: userData.map((data) => ({
      author: (
        <Author
          // image={data?.agency_details?.document_details?.pan_card_document}
          name={
            `${data.passengerDetails[0]?.firstName} ${data.passengerDetails[0]?.lastName}` ||
            "No Data"
          }
          email={data.passengerDetails[0]?.email || "No Data"}
        />
      ),
      pnr: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.pnr || "No Data"}
        </MDTypography>
      ),
      date: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.UserDetails.username || "No Data"}
        </MDTypography>
      ),
      agecncyname: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.bookingId || "No Data"}
        </MDTypography>
      ),
      phone: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {`${data.UserDetails[0]?.personal_details.mobile?.mobile_number || ""}`}{" "}
        </MDTypography>
      ),
      address: <MDBox ml={-1}>{data.airlineDetails[0]?.Airline?.AirlineName || "No Data"}</MDBox>,
      id: <MDBox ml={-1}>{data.airlineDetails[0]?.Origin?.DepTime || "No Data"}</MDBox>,
      amount: <MDBox ml={-1}>{data.origin || "No Data"}</MDBox>,
      person: <MDBox ml={-1}>{data.destination || "No Data"}</MDBox>,
      totalAmount: <MDBox ml={-1}>{data.totalAmount || "No Data"}</MDBox>,
    })),
  };
}
