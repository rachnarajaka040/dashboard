/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 skytrails (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
// eslint-disable react/prop-types
// eslint-disable react/function-component-definition
// Material Dashboard 2 React - v2.2.0
// Product Page: https://www.creative-tim.com/product/material-dashboard-react
// Copyright 2023 skytrails (https://www.creative-tim.com)
// Coded by www.creative-tim.com

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableHead, TableBody, TableRow, TableCell, Button, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { apiURL } from "Constants/Constant";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
export default function Data() {
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
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${apiURL.baseURL}/skyTrails/api/admin/getAllUsers`, {
          params: {
            page: currentPage,
            size: 10,
          },
        });
        setUserData(response.data.result.docs);
        setTotalPages(response.data.result.totalPages);
        setFilteredData(response.data.result.docs);
      } catch (error) {
        console.error("Error fetching User bookings:", error);
      }
    };

    fetchUserData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = userData.filter((item) => {
      const usernameMatch = item.username?.toLowerCase().includes(term) || false;
      const dobMatch = item.dob?.toLowerCase().includes(term) || false;
      const mobileNumberMatch = item.phone?.mobile_number?.toLowerCase().includes(term) || false;

      return usernameMatch || dobMatch || mobileNumberMatch;
    });

    setFilteredData(filtered);
  };

  const renderRows = () => {
    if (filteredData.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={13} style={{ textAlign: "center" }}>
            No results found.
          </TableCell>
        </TableRow>
      );
    }
    return filteredData.map((data, index) => (
      <TableRow key={index}>
        <TableCell style={{ width: "33%" }}>
          <Author
            image={data.profilePic}
            name={data.username || "No Data"}
            email={data.email || "No Data"}
          />
        </TableCell>
        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.dob || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell style={{ width: "33%" }}>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data.phone?.mobile_number || "No Data"}
          </MDTypography>
        </TableCell>
      </TableRow>
    ));
  };

  // const Pagination = () => {
  //   const buttonStyle = {
  //     backgroundColor: "#FF5733",
  //     borderRadius: "50%",
  //     width: "40px", // Set a fixed width for the buttons
  //     height: "40px", // Set a fixed height for the buttons
  //     marginLeft: "4px", // Adjust the spacing between buttons
  //     marginRight: "4px", // Adjust the spacing between buttons
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
  //       {Array.from({ length: totalPages }, (_, index) => (
  //         <IconButton
  //           key={index + 1}
  //           onClick={() => handlePageChange(index + 1)}
  //           disabled={currentPage === index + 1}
  //           style={{
  //             ...buttonStyle,
  //             backgroundColor: currentPage === index + 1 ? "#FF5733" : "#E0E0E0",
  //           }}
  //         >
  //           {index + 1}
  //         </IconButton>
  //       ))}
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
  const Pagination = () => {
    const buttonStyle = {
      backgroundColor: "#21325D",
      borderRadius: "50%",
      width: "40px", // Set a fixed width for the buttons
      height: "40px", // Set a fixed height for the buttons
      marginLeft: "4px", // Adjust the spacing between buttons
      marginRight: "4px",
      color: "white", // Adjust the spacing between buttons
    };
    const buttonStyles = {
      backgroundColor: "#21325D",
      borderRadius: "50%",
      width: "40px", // Set a fixed width for the buttons
      height: "40px", // Set a fixed height for the buttons
      marginLeft: "4px", // Adjust the spacing between buttons
      marginRight: "4px", // Adjust the spacing between buttons
      color: "white",
    };

    const visiblePages = 5; // Number of visible pages

    const getVisiblePageNumbers = () => {
      const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
      const endPage = Math.min(totalPages, startPage + visiblePages - 1);

      return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    };

    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16, marginBottom: 10 }}>
        <IconButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={buttonStyle}
        >
          <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
        </IconButton>
        {getVisiblePageNumbers().map((pageNumber, index) => (
          <IconButton
            key={index + 1}
            onClick={() => handlePageChange(pageNumber)}
            disabled={currentPage === pageNumber}
            style={{
              ...buttonStyle,
              backgroundColor: currentPage === pageNumber ? "#21325D" : "#E0E0E0",
            }}
          >
            {pageNumber}
          </IconButton>
        ))}
        {totalPages > visiblePages && currentPage < totalPages - 2 && (
          <span style={{ lineHeight: "40px", marginLeft: "4px", marginRight: "4px" }}>...</span>
        )}
        {totalPages > visiblePages && currentPage < totalPages - 1 && (
          <IconButton onClick={() => handlePageChange(totalPages)} style={buttonStyles}>
            {totalPages}
          </IconButton>
        )}
        <IconButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={buttonStyle}
        >
          <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
        </IconButton>
      </div>
    );
  };

  console.log(filteredData, "filtered Data on the search");
  console.log(userData, "User Data Before search");
  return (
    <MDBox>
      <MDBox
        mx={2}
        mt={-7}
        py={2}
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
          User Table
        </MDTypography>
        <MDBox sx={{ color: "white" }}>
          <TextField label="Search" variant="outlined" onChange={handleSearch} value={searchTerm} />
        </MDBox>
      </MDBox>

      <Table>
        <TableRow>
          <TableCell style={{ width: "33%" }}>UserName</TableCell>
          <TableCell style={{ width: "33%" }}>Date of Birth</TableCell>
          <TableCell style={{ width: "33%" }}>Phone Number</TableCell>
        </TableRow>

        <TableBody>{renderRows()}</TableBody>
      </Table>

      <Pagination />
    </MDBox>
  );
}
