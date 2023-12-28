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
import axios from "axios";
import { apiURL } from "Constants/Constant";
import { useEffect, useState } from "react";
// Images
import team2 from "assets/images/team-2.jpg";
import { Button } from "@mui/material";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" aligndatas="center" lineHeight={1}>
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
  const [userData, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiURL.baseURL}/skytrails/api/admin/getAllFixDepartureBooking`
        );
        setData(response?.data?.result.docs);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleUpdate = (flightId, seat) => {
    const payload = {
      _id: flightId,
      noOfBooking: seat,
    };

    userApi.updateFlightBookingSeat(payload);
  };
  return {
    columns: [
      { Header: "agents", accessor: "author", width: "30%", align: "left" },
      { Header: "No of Seat", accessor: "agecncyname", width: "30%", align: "center" },
      { Header: "phone", accessor: "classification", align: "left", width: "40%" },
      { Header: "user type", accessor: "address", align: "left" },

      { Header: "otp verified", accessor: "seat", align: "center" },
      { Header: "reason", accessor: "bustype", align: "center" },
      { Header: "update", accessor: "update", align: "center" },
    ],

    rows: userData.map((data) => ({
      author: (
        <Author
          // image={data?.agency_details?.document_details?.pan_card_document}
          name={data?.loginName}
          email={data?.emailId}
        />
      ),
      agecncyname: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.numberOfSeats}
        </MDTypography>
      ),
      classification: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.phoneNo}
        </MDTypography>
      ),
      address: <MDBox ml={-1}>{data?.soldTo}</MDBox>,

      bustype: <MDBox ml={-1}>{data?.finalSalePrice}</MDBox>,
      seat: <MDBox ml={-1}>{data?.status || "No Data"}</MDBox>,
      update: (
        <MDBox ml={-1}>
          <Button onClick={() => handleUpdate(data?.flightId, data?.numberOfSeats)}>Update</Button>
        </MDBox>
      ),
    })),
  };
}
