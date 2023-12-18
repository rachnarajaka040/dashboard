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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AgentTables from "./layouts/agenttable";
// @mui icons
import Icon from "@mui/material/Icon";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CancelIcon from "@mui/icons-material/Cancel";
import AgentCancelRequestDropdown from "layouts/AgentCancelRequestDropdown";
import UserCancelRequestDropdown from "./layouts/UserCancelRequestDropdown";
import FlightTables from "./layouts/flighttable";
import HotelTables from "layouts/hoteltable";
import BusTables from "layouts/bustable";
import UserChangeRequest from "layouts/UserChangeRequest";
import AgentChangeRequest from "layouts/AgentChangeRequest";
import AgentCancelRequest from "layouts/agentcancelrequest";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EditIcon from "@mui/icons-material/Edit";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import UserBookings from "layouts/UserBookings";
import AgentsBookings from "layouts/AgentsBookings";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { FaCcVisa } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { MdFlightTakeoff } from "react-icons/md";
import ScheduleIcon from "@mui/icons-material/Schedule";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Agent Request",
    key: "agent",
    icon: <PeopleOutlineIcon fontSize="small" />,
    route: "/tableses",
    component: <AgentTables />,
  },
  {
    type: "collapse",
    name: <AgentCancelRequestDropdown />,
    key: "tables",
    icon: <CancelIcon fontSize="small" />,
  },
  {
    type: "collapse",
    name: <UserCancelRequestDropdown />,
    key: "users",
    icon: <CancelIcon fontSize="small" />,
  },
  {
    type: "collapse",
    name: <UserChangeRequest />,
    key: "users",
    icon: <ChangeCircleIcon fontSize="small" />,
  },
  {
    type: "collapse",
    name: <AgentChangeRequest />,
    key: "users",
    icon: <ChangeCircleIcon fontSize="small" />,
  },
  {
    type: "collapse",
    name: <UserBookings />,
    key: "booking",
    icon: <EventNoteIcon fontSize="small" />,
  },
  {
    type: "collapse",
    name: <AgentsBookings />,
    key: "booking",
    icon: <EventNoteIcon fontSize="small" />,
  },
  {
    type: "collapse",
    name: "Visa Request",
    key: "visa",
    icon: <FaCcVisa size={17}>table_view</FaCcVisa>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "OfferList",
    key: "offerlist",
    icon: <IoIosList size={20}>table_view</IoIosList>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Fixed Departure",
    key: "fixed",
    icon: <MdFlightTakeoff size={20}>table_view</MdFlightTakeoff>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Fixed Departure Control",
    key: "control",
    icon: <ScheduleIcon Size={20}>table_view</ScheduleIcon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    key: "flight table", // Unique key for the route
    route: "/flighttable", // Route path for FlightTables
    component: <FlightTables />, // FlightTables component
  },
  {
    key: "hoteltable", // Unique key for the route
    route: "/hoteltable", // Route path for FlightTables
    component: <HotelTables />, // FlightTables component
  },
  {
    key: "bustable", // Unique key for the route
    route: "/bustable", // Route path for FlightTables
    component: <BusTables />, // FlightTables component
  },
  {
    type: "collapse",
    name: "User Markup Amount",
    key: "markup",
    icon: <AccountBalanceIcon fontSize="small" />,
    // route: "/",
    // component: <Tables />,
  },
  {
    type: "collapse",
    name: "Edit Holiday Package",
    key: "holiday",
    icon: <EditIcon fontSize="small" />, // Replace with the desired icon
    // component: <EditHolidayPackage />,
  },
  {
    type: "collapse",
    name: "Forex",
    key: "forex",
    icon: <MonetizationOnIcon fontSize="small" />, // Replace with the desired icon
    // component: <Forex />,
  },
  {
    type: "collapse",
    name: "Add Subadmin",
    key: "tables",
    icon: <GroupAddIcon fontSize="small" />,
    route: "/tableses",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
    component: <RTL />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
