// /* eslint-disable react/prop-types */
// /* eslint-disable react/function-component-definition */
// /**
// =========================================================
// * Material Dashboard 2 React - v2.2.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2023 skytrails (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";
// import { apiURL } from "Constants/Constant";
// import { useEffect, useState } from "react";
// import axios from "axios";
// // Images
// import team2 from "assets/images/team-2.jpg";

// export default function data() {
//   const Author = ({ image, name, email }) => (
//     <MDBox display="flex" alignItems="center" lineHeight={1}>
//       <MDAvatar src={image} name={name} size="sm" />
//       <MDBox ml={2} lineHeight={1}>
//         <MDTypography display="block" variant="button" fontWeight="medium">
//           {name}
//         </MDTypography>
//         <MDTypography variant="caption">{email}</MDTypography>
//       </MDBox>
//     </MDBox>
//   );

//   const Job = ({ title, description }) => (
//     <MDBox lineHeight={1} textAlign="left">
//       <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
//         {title}
//       </MDTypography>
//       <MDTypography variant="caption">{description}</MDTypography>
//     </MDBox>
//   );

//   const [userData, setuserData] = useState([]);

//   const fetchuserdata = async () => {
//     try {
//       const responseData = await axios.get(`${apiURL.baseURL}/skyTrails/user/getallusers`);
//       setuserData(responseData?.data?.data);
//       // console.log(responseData.data.data, "apiadat");
//     } catch (error) {
//       console.error("Error fetching dashboard data:", error);
//     }
//   };
//   useEffect(() => {
//     fetchuserdata();
//   }, []);
//   return {
//     columns: [
//       { Header: "agents", accessor: "author", width: "30%", align: "left" },
//       { Header: "agency name", accessor: "agecncyname", width: "30%" },
//       { Header: "agency classification", accessor: "classification", align: "left", width: "40%" },
//       { Header: "agency address", accessor: "address", align: "left" },
//       { Header: "Contact Person", accessor: "person", align: "left" },
//       { Header: "status", accessor: "status", align: "center" },
//       { Header: "Provisional GSTIN", accessor: "employed", align: "center" },
//       { Header: "Mobile", accessor: "mobile", align: "center" },
//       { Header: "Password", accessor: "Password", align: "center" },
//       { Header: "flight  amount", accessor: "flight", align: "center" },
//       { Header: "hotel amount", accessor: "hotel", align: "center" },
//       { Header: "bus amount", accessor: "bus", align: "center" },
//       { Header: "holiday amount", accessor: "holiday", align: "center" },
//       { Header: "Vendor amount", accessor: "vendor", align: "center" },
//     ],

//     rows: userData.map((data) => ({
//       author: (
//         <Author
//           image={data?.agency_details?.document_details?.pan_card_document}
//           name={data.personal_details.first_name || "NA"}
//           email={data.personal_details.email || "NA"}
//         />
//       ),
//       agecncyname: (
//         <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
//           {data.agency_details.agency_name || "NA"}
//         </MDTypography>
//       ),
//       classification: (
//         <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
//           {data.agency_gst_details?.agency_classification || "NA"}
//         </MDTypography>
//       ),
//       address: (
//         <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
//           {data.agency_details.address || "NA"}
//         </MDTypography>
//       ),
//       person: (
//         <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
//           {data.agency_gst_details?.contact_person || "NA"}
//         </MDTypography>
//       ),
//       status: (
//         <MDBox ml={-1}>
//           <MDBadge badgeContent="block" color="success" variant="gradient" size="sm" />
//         </MDBox>
//       ),
//       employed: (
//         <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
//           {data.agency_gst_details?.provisional_GSTIN || "NA"}
//         </MDTypography>
//       ),
//       mobile: (
//         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//           {data.personal_details?.mobile?.mobile_number || "NA"}
//         </MDTypography>
//       ),
//       Password: (
//         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//           {data.personal_details?.password?.slice(0, 32) || "NA"}
//           <br />
//           {data.personal_details?.password?.slice(32) || "NA"}
//         </MDTypography>
//       ),
//       flight: (
//         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//           {data.markup?.flight || "NA"}
//         </MDTypography>
//       ),
//       hotel: (
//         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//           {data.markup?.hotel || "NA"}
//         </MDTypography>
//       ),
//       bus: (
//         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//           {data.markup?.bus || "NA"}
//         </MDTypography>
//       ),
//       holiday: (
//         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//           {data.markup?.holiday || "NA"}
//         </MDTypography>
//       ),
//       vendor: (
//         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//           Edit
//         </MDTypography>
//       ),
//     })),
//   };
// }
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
 * =========================================================
 * Material Dashboard 2 React - v2.2.0
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2023 skytrails (https://www.creative-tim.com)
 *
 * Coded by www.creative-tim.com
 *
 * =========================================================
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableHead, TableBody, TableRow, TableCell, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { apiURL } from "Constants/Constant";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import MDBadge from "components/MDBadge";
import Swal from "sweetalert2";

export default function AgentDataTable() {
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
  // const [totalPages, setTotalPages] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [userStatuses, setUserStatuses] = useState({
    // Example structure, replace it with your actual data
    userId1: "active",
    userId2: "inactive",
    userId1: "blocked",
    userId2: "pending",
    // ...
  });
  const handleStatusChange = (userId, status) => {
    // Update the status for the specific user
    setUserStatuses((prevStatuses) => ({
      ...prevStatuses,
      [userId]: status,
    }));
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const responseData = await axios.get(`${apiURL.baseURL}/skyTrails/user/getallusers`);
        setUserData(responseData?.data?.data);
        console.log(responseData.data.data, "apiadat");
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchUserData();
  }, []);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = userData.filter((item) => {
      const usernameMatch =
        item.personal_details?.first_name?.toLowerCase().includes(term) || false;
      const dobMatch = item.personal_details?.email?.toLowerCase().includes(term) || false;
      const mobileNumberMatch =
        item.personal_details?.mobile?.mobile_number.toLowerCase().includes(term) || false;

      return usernameMatch || dobMatch || mobileNumberMatch;
    });

    setFilteredData(filtered);
  };
  const handleEditClick = (data) => {
    Swal.fire({
      title: "Edit Amount",
      html: `<input id="swal-input1" class="swal2-input" placeholder="Enter new amount" value="${
        data.amount || ""
      }">`,
      showCancelButton: true,
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed) {
        const newAmount = document.getElementById("swal-input1").value;
        // Perform actions with the new amount (e.g., update the data)
        console.log("New Amount:", newAmount);
        // You can update the state or perform other actions as needed
      }
    });
  };
  const renderRows = () => {
    return userData.map((data, index) => (
      <TableRow key={index}>
        <TableCell style={{ width: "33%" }}>
          <Author
            image={data?.agency_details?.document_details?.pan_card_document}
            name={data.personal_details.first_name || "NA"}
            email={data.personal_details.email || "NA"}
          />
        </TableCell>
        {/* <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.personal_details?.mobile?.mobile_number || "No Data"}
          </MDTypography>
        </TableCell> */}
        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.agency_details.agency_name || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.agency_gst_details?.agency_classification || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.agency_details.address || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.agency_gst_details?.contact_person || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.agency_gst_details?.provisional_GSTIN || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.personal_details?.mobile?.mobile_number || "NA"}
          </MDTypography>
        </TableCell>

        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.personal_details?.password?.slice(0, 32) || "NA"}
            <br />
            {data.personal_details?.password?.slice(32) || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell>
          <MDBox display="flex" alignItems="center">
            <select
              value={userStatuses[data._id]}
              onChange={(e) => handleStatusChange(data._id, e.target.value)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                appearance: "none",
                padding: "0",
                marginRight: "5px",
              }}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
              <option value="block">Block</option>
            </select>
            {userStatuses[data._id] === "active" && (
              <MDBadge badgeContent="Active" color="success" variant="gradient" size="sm" />
            )}
            {userStatuses[data._id] === "inactive" && (
              <MDBadge badgeContent="Inactive" color="error" variant="gradient" size="sm" />
            )}
            {userStatuses[data._id] === "pending" && (
              <MDBadge badgeContent="Pending" color="warning" variant="gradient" size="sm" />
            )}
            {userStatuses[data._id] === "blocked" && (
              <MDBadge badgeContent="Blocked" color="info" variant="gradient" size="sm" />
            )}
          </MDBox>
        </TableCell>
        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.markup?.flight || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.markup?.hotel || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.markup?.bus || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.markup?.holiday || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell style={{ width: "33%" }}>
          <MDTypography
            component="div"
            variant="caption"
            color="text"
            fontWeight="medium"
            onClick={() => handleEditClick(data)}
            style={{ cursor: "pointer" }}
          >
            Edit
          </MDTypography>
        </TableCell>
      </TableRow>
    ));
  };

  // const Pagination = () => {
  //   const buttonStyle = {
  //     backgroundColor: "#21325D",
  //     borderRadius: "50%",
  //     width: "40px",
  //     height: "40px",
  //     marginLeft: "4px",
  //     marginRight: "4px",
  //     color: "white",
  //   };
  //   const buttonStyles = {
  //     backgroundColor: "#21325D",
  //     borderRadius: "50%",
  //     width: "40px",
  //     height: "40px",
  //     marginLeft: "4px",
  //     marginRight: "4px",
  //     color: "white",
  //   };

  //   const visiblePages = 5;

  //   const getVisiblePageNumbers = () => {
  //     const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  //     const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  //     return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  //   };

  //   return (
  //     <div style={{ display: "flex", justifyContent: "center", marginTop: 16, marginBottom: 10 }}>
  //       <IconButton
  //         onClick={() => handlePageChange(currentPage - 1)}
  //         disabled={currentPage === 1}
  //         style={buttonStyle}
  //       >
  //         <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
  //       </IconButton>
  //       {getVisiblePageNumbers().map((pageNumber, index) => (
  //         <IconButton
  //           key={index + 1}
  //           onClick={() => handlePageChange(pageNumber)}
  //           disabled={currentPage === pageNumber}
  //           style={{
  //             ...buttonStyle,
  //             backgroundColor: currentPage === pageNumber ? "#21325D" : "#E0E0E0",
  //           }}
  //         >
  //           {pageNumber}
  //         </IconButton>
  //       ))}
  //       {totalPages > visiblePages && currentPage < totalPages - 2 && (
  //         <span style={{ lineHeight: "40px", marginLeft: "4px", marginRight: "4px" }}>...</span>
  //       )}
  //       {totalPages > visiblePages && currentPage < totalPages - 1 && (
  //         <IconButton onClick={() => handlePageChange(totalPages)} style={buttonStyles}>
  //           {totalPages}
  //         </IconButton>
  //       )}
  //       <IconButton
  //         onClick={() => handlePageChange(currentPage + 1)}
  //         disabled={currentPage === totalPages}
  //         style={buttonStyle}
  //       >
  //         <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
  //       </IconButton>
  //     </div>
  //   );
  // };

  return (
    <MDBox>
      <MDBox
        mx={2}
        mt={-7}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <MDTypography variant="h6" color="white">
          Agent Table
        </MDTypography>
        {/* <MDBox sx={{ color: "white" }}>
          <TextField label="Search" variant="outlined" onChange={handleSearch} value={searchTerm} />
        </MDBox> */}
      </MDBox>
      <MDBox sx={{ overflowX: "auto" }}>
        <Table>
          <TableRow>
            <TableCell style={{ width: "33%" }}>agents</TableCell>

            {/* <TableCell style={{ width: "33%" }}>agency name</TableCell> */}
            <TableCell>Agent Name</TableCell>

            <TableCell>agency classification</TableCell>
            <TableCell>agency address</TableCell>
            <TableCell>Contact Person</TableCell>
            <TableCell style={{ width: "33%" }}>Provisional GSTIN</TableCell>

            <TableCell style={{ width: "33%" }}>Mobile</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Status</TableCell>

            <TableCell>flight amount</TableCell>
            <TableCell>hotel amount</TableCell>
            <TableCell>Bus amount</TableCell>
            <TableCell>holiday amount</TableCell>

            <TableCell>Vendor amount</TableCell>
          </TableRow>

          <TableBody>{renderRows()}</TableBody>
        </Table>
      </MDBox>
      {/* <Pagination /> */}
    </MDBox>
  );
}
