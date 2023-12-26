// Import necessary components and modules
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { apiURL } from "Constants/Constant";
import { useEffect, useState } from "react";
export default function data() {
  // Define Author and Job components

  const [userData, setAgentData] = useState([]);

  const fetchAgentData = async () => {
    try {
      const responseData = await axios.get(`${apiURL.baseURL}/skytrails/api/admin/getAgents`);
      setAgentData(responseData?.data?.result.docs);
      console.log(responseData.data.result.docs, "apiadat");
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchAgentData();
  }, []);

  return {
    columns: [
      { Header: "id", accessor: "_id" },
      { Header: "User Name", accessor: "author" },
      { Header: "Email", accessor: "email" },
      {
        Header: "phone",
        accessor: "personal_details.mobile.mobile_number",
      },
      { Header: "User Type", accessor: "type" },
      { Header: "OtpVerified", accessor: "otp" },
      { Header: "ApproveStatus", accessor: "approve" },
      { Header: "Status", accessor: "status" },
      { Header: "Reason", accessor: "reason" },

      // Add other columns as needed
    ],

    rows: userData.map((data) => ({
      // _id: data._id,

      // classification: data.agency_gst_details?.agency_classification || "NA",
      // address: data.agency_details.address || "NA",
      // person: data.agency_gst_details?.contact_person || "NA",
      author: (
        <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
          {data.agency_details.agency_name || "NA"}
        </MDTypography>
      ),
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="block" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      approvestatus: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="block" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      // employed: <Job description="Organization" />,
      mobile: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {data.personal_details.mobile.mobile_number}
        </MDTypography>
      ),
      // Add other properties as needed
    })),
  };
}
