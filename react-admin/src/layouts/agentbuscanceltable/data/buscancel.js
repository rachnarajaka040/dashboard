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
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableHead, TableBody, TableRow, TableCell, Button, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { apiURL } from "Constants/Constant";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

export default function AgentsBusCancel() {
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

  const fetchUserData = async () => {
    try {
      const responseData = await axios.get(
        `${apiURL.baseURL}/skytrails/api/agent/getCancelBusBooking`,
        {
          params: {
            page: currentPage,
            size: 10,
          },
        }
      );
      setUserData(responseData?.data?.result.docs);
      setTotalPages(responseData.data.result.totalPages);
      setFilteredData(responseData.data.result.docs);
      console.log(responseData?.data?.result.docs + "flightcancel");
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [currentPage]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = userData.filter((item) => {
      const usernameMatch =
        item.userDetails.agency_details.agency_name?.toLowerCase().includes(term) || false;
      const dobMatch =
        item.userDetails.personal_details.first_name?.toLowerCase().includes(term) || false;
      const mobileNumberMatch =
        item.userDetails.personal_details.email?.toLowerCase().includes(term) || false;

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
    return filteredData.map((booking) => (
      <TableRow key={booking._id}>
        <TableCell>{booking.busId}</TableCell>
        <TableCell>{booking.userDetails.agency_details.agency_name}</TableCell>
        <TableCell>{`${booking.userDetails.personal_details.first_name} ${booking.userDetails.personal_details.last_name}`}</TableCell>
        <TableCell>{booking.userDetails.personal_details.mobile.mobile_number}</TableCell>
        <TableCell>{booking.userDetails.personal_details.email}</TableCell>
        <TableCell>{booking.reason}</TableCell>
        <TableCell>{booking.bustDetails.pnr}</TableCell>
        <TableCell>{booking.bustDetails.amount}</TableCell>
        <TableCell>{booking.bustDetails.origin}</TableCell>
        <TableCell>{booking.bustDetails.destination}</TableCell>
        <TableCell>{booking.bustDetails.departureTime}</TableCell>
        <TableCell>{booking.bustDetails.busType}</TableCell>
        <TableCell>
          <div style={{ width: "150px" }}>
            <Button sx={{ border: "1px solid #E73C33", color: "black" }}>Approve</Button>
          </div>
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
          Agent Bus Cancel
        </MDTypography>
        <MDBox sx={{ color: "white" }}>
          <TextField label="Search" variant="outlined" onChange={handleSearch} value={searchTerm} />
        </MDBox>
      </MDBox>
      <MDBox sx={{ overflowX: "auto" }}>
        <Table>
          <TableRow style={{ overflow: "scroll" }}>
            <TableCell>Bus ID</TableCell>
            <TableCell>Agency Name</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Reason</TableCell>
            <TableCell>PNR</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>DateOfJourney</TableCell>
            <TableCell>busType</TableCell>
            <TableCell>Approve</TableCell>
          </TableRow>

          <TableBody>{renderRows()}</TableBody>
        </Table>
      </MDBox>

      <Pagination />
    </MDBox>
  );

  //   columns: [
  //     { Header: "agents", accessor: "author", width: "30%", align: "left" },
  //     { Header: "agency name", accessor: "date", align: "center" },
  //     { Header: "booking id", accessor: "agecncyname", width: "30%", align: "center" },
  //     { Header: "phone", accessor: "phone", align: "left", width: "40%" },
  //     { Header: "reason", accessor: "address", align: "left" },
  //     { Header: "Hotel ID", accessor: "id", align: "left" },
  //     { Header: "Amount", accessor: "amount", align: "left" },

  //     { Header: "Check in date", accessor: "approvestatus", align: "center", width: "45%" },
  //     { Header: "destination", accessor: "employed", align: "center" },
  //     { Header: "rooms", accessor: "origin", align: "center" },
  //     { Header: "Hotel name", accessor: "mobile", align: "center" },
  //     { Header: "APPROVE", accessor: "approve", align: "center" },
  //   ],

  //   rows: userData.map((data) => ({
  //     author: (
  //       <div style={{ width: "150px" }}>
  //         <Author
  //           // image={data?.agency_details?.document_details?.pan_card_document}
  //           name={`${data.userDetails.personal_details.first_name}  ${data.userDetails.personal_details.last_name}`}
  //           email={data?.userDetails.personal_details.email || "NA"}
  //         />
  //       </div>
  //     ),
  //     date: (
  //       <div style={{ width: "150px" }}>
  //         <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
  //           {data.userDetails.agency_details.agency_name || "NA"}
  //         </MDTypography>
  //       </div>
  //     ),
  //     agecncyname: (
  //       <div style={{ width: "150px" }}>
  //         <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
  //           {data?.bookingId || "NA"}
  //         </MDTypography>
  //       </div>
  //     ),
  //     phone: (
  //       <div style={{ width: "150px" }}>
  //         <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
  //           {data?.userDetails.personal_details.mobile.mobile_number || "NA"}
  //         </MDTypography>
  //       </div>
  //     ),
  //     address: (
  //       <div style={{ width: "150px" }}>
  //         <MDBox ml={-1}>{data?.reason}</MDBox>
  //       </div>
  //     ),
  //     id: (
  //       <div style={{ width: "150px" }}>
  //         <MDBox ml={-1}>{data.hotelDetails.hotelId}</MDBox>
  //       </div>
  //     ),
  //     amount: (
  //       <div style={{ width: "150px" }}>
  //         <MDBox ml={-1}>{data.hotelDetails.amount}</MDBox>
  //       </div>
  //     ),
  //     person: (
  //       <div style={{ width: "150px" }}>
  //         <MDBox ml={-1}>{data?.pnr}</MDBox>
  //       </div>
  //     ),

  //     approvestatus: (
  //       <div style={{ width: "150px" }}>
  //         <MDBox ml={-1}>{data?.hotelDetails.CheckInDate}</MDBox>
  //       </div>
  //     ),
  //     employed: (
  //       <div style={{ width: "150px" }}>
  //         <MDBox ml={-1}>{data.hotelDetails.destination} </MDBox>
  //       </div>
  //     ),
  //     origin: (
  //       <div style={{ width: "150px" }}>
  //         {" "}
  //         <MDBox ml={-1}>{data.hotelDetails.room}</MDBox>
  //       </div>
  //     ),
  //     mobile: (
  //       <div style={{ width: "150px" }}>
  //         <MDBox ml={-1}>{data.hotelDetails.hotelName}</MDBox>
  //       </div>
  //     ),
  //     approve: (
  //       <div style={{ width: "150px" }}>
  //         <Button sx={{ border: "1px solid #E73C33", color: "black" }}>Approve</Button>
  //       </div>
  //     ),
  //   })),
  // };
}
