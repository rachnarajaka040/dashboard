/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { apiURL } from "Constants/Constant";
import { useEffect, useState } from "react";
import axios from "axios";

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

  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
    try {
      const responseData = await axios.get(`${apiURL.baseURL}/skytrails/api/admin/getSubAdmin`);
      setUserData(responseData.data.result.docs);
      console.log(responseData.data.result.docs + "userdataaaaaaa");
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return {
    columns: [
      { Header: "User Name", accessor: "userName", width: "30%", align: "left" },
      { Header: "Email", accessor: "email", align: "center" },
      { Header: "Contact", accessor: "contactNumber", align: "center" },

      { Header: "Auth Type", accessor: "userType", align: "center" },
      { Header: "Status", accessor: "status", align: "center" },
    ],

    rows: userData.map((data) => ({
      userName: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.userName || "NA"}
        </MDTypography>
      ),
      email: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.email || "NA"}
        </MDTypography>
      ),
      contactNumber: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.contactNumber || "NA"}
        </MDTypography>
      ),
      userType: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data?.authType || "NA"}
        </MDTypography>
      ),
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="block" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
    })),
  };
}
