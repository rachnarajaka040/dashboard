/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableHead, TableBody, TableRow, TableCell, Button, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { apiURL } from "Constants/Constant";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import MDBadge from "components/MDBadge";
export default function SubAdmindata() {
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

  const [userStatuses, setUserStatuses] = useState({
    // Example structure, replace it with your actual data
    userId1: "active",
    userId2: "blocked",
    userId3: "delete",
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
        const response = await axios.get(`${apiURL.baseURL}/skytrails/api/admin/getSubAdmin`, {
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
      const usernameMatch = item.userName?.toLowerCase().includes(term) || false;
      const dobemail = item.email?.toLowerCase().includes(term) || false;
      const mobileNumberMatch = item.contactNumber?.toLowerCase().includes(term) || false;

      return usernameMatch || dobemail || mobileNumberMatch;
    });

    setFilteredData(filtered);
  };

  const renderRows = () => {
    return filteredData.map((data) => (
      <TableRow key={data._id}>
        <TableCell>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data?.userName || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data?.email || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data?.contactNumber || "NA"}
          </MDTypography>
        </TableCell>
        <TableCell>
          <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
            {data?.authType || "NA"}
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
              <option value="active">ACTIVE</option>
              <option value="delete">DELETE</option>
              <option value="block">BLOCKED</option>
            </select>
            {userStatuses[data._id] === "active" && (
              <MDBadge badgeContent="ACTIVE" color="success" variant="gradient" size="sm" />
            )}
            {userStatuses[data._id] === "blocked" && (
              <MDBadge badgeContent="BLOCKED" color="error" variant="gradient" size="sm" />
            )}
            {userStatuses[data._id] === "delete" && (
              <MDBadge badgeContent="DELETE" color="warning" variant="gradient" size="sm" />
            )}
          </MDBox>
        </TableCell>
      </TableRow>
    ));
  };
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
          SubAdmin Table
        </MDTypography>
        <MDBox sx={{ color: "white" }}>
          <TextField label="Search" variant="outlined" onChange={handleSearch} value={searchTerm} />
        </MDBox>
      </MDBox>
      <Table>
        <TableRow>
          <TableCell style={{ width: "30%" }}>User Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Contact</TableCell>
          <TableCell>Auth Type</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>

        <TableBody>{renderRows()}</TableBody>
      </Table>
      <Pagination />
    </MDBox>
  );
}
