import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import { Link } from "react-router-dom";
const UserCancelRequestDropdown = () => {
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
        User Cancel Request
      </div>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <Link to="/userflightcancel">
          {" "}
          <MenuItem
            // onClick={handleMenuItemClick}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FlightIcon fontSize="small" />
            Flight
          </MenuItem>
        </Link>
        <Link to="/Userhotelcancel">
          {" "}
          <MenuItem style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <HotelIcon fontSize="small" />
            Hotel
          </MenuItem>
        </Link>

        <Link to="/userbuscancel">
          <MenuItem style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <DirectionsBusIcon fontSize="small" />
            Bus
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default UserCancelRequestDropdown;
