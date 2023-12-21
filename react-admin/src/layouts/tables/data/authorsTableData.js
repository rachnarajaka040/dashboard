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
  const [userData, setuserData] = useState([]);

  const fetchuserdata = async () => {
    try {
      const responseData = await axios.get(`${apiURL.baseURL}/skyTrails/user/getallusers`);
      setuserData(responseData?.data?.data);
      // console.log(responseData.data.data, "apiadat");
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };
  useEffect(() => {
    fetchuserdata();
  }, []);
  return {
    columns: [
      { Header: "agents", accessor: "author", width: "30%", align: "left" },
      { Header: "agency name", accessor: "agecncyname", width: "30%" },
      { Header: "agency classification", accessor: "classification", align: "left", width: "40%" },
      { Header: "agency address", accessor: "address", align: "left" },
      { Header: "Contact Person", accessor: "person", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "Provisional GSTIN", accessor: "employed", align: "center" },
      { Header: "Mobile", accessor: "mobile", align: "center" },
      { Header: "Password", accessor: "Password", align: "center" },
      { Header: "flight  amount", accessor: "flight", align: "center" },
      { Header: "hotel amount", accessor: "hotel", align: "center" },
      { Header: "bus amount", accessor: "bus", align: "center" },
      { Header: "holiday amount", accessor: "holiday", align: "center" },
      { Header: "Vendor amount", accessor: "vendor", align: "center" },
    ],

    rows: userData.map((data) => ({
      author: (
        <Author
          image={team2}
          name={data.personal_details.first_name}
          email={data.personal_details.email}
        />
      ),
      // author: (
      //   <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
      //     {data.personal_details.first_name} {data.personal_details.last_name}
      //   </MDTypography>
      // ),
      agencyname: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.agency_details.agency_name}
        </MDTypography>
      ),
      classification: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.agency_gst_details.agency_classification}
        </MDTypography>
      ),
      address: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.agency_details.address}
        </MDTypography>
      ),
      person: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.personal_details.first_name} {data.personal_details.last_name}
        </MDTypography>
      ),
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="block" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      employed: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.employed}
        </MDTypography>
      ),
      mobile: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {data.personal_details.mobile.mobile_number}
        </MDTypography>
      ),
      Password: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
      flight: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
      hotel: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
      bus: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
      holiday: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
      vendor: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
    })),
  };
}
