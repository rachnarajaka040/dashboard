import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import FlightTables from "./flighttable";

import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import { Link } from "react-router-dom";
const AgentsBookings = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div onClick={handleClick}>
        {/* <CancelIcon fontSize="small" /> */}
        Agent Bookings
      </div>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <Link to="/agentflightbooking">
          {" "}
          <MenuItem
            // onClick={handleMenuItemClick}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FlightIcon fontSize="small" />
            Flight
          </MenuItem>
        </Link>
        <Link to="/agenthotelbooking">
          {" "}
          <MenuItem style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <HotelIcon fontSize="small" />
            Hotel
          </MenuItem>
        </Link>

        <Link to="/agentbusbooking">
          <MenuItem style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <DirectionsBusIcon fontSize="small" />
            Bus
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default AgentsBookings;
