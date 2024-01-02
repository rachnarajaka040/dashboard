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
import HotelChange from "layouts/hotelchangetable";
import FlightChange from "layouts/flightchangetable";
import BusChange from "layouts/buschangetable";
import UserBusChange from "layouts/userbuschangetable";
import UserHotelChange from "layouts/userhotelchangetable";
import UserFlightChange from "layouts/userflightchangetable";
import FixedDeparture from "layouts/authentication/fixed-Departure/FixedDeparture";
import SubAdmin from "layouts/authentication/sub-admin";
import Admin from "layouts/authentication/admin";
import Event from "layouts/authentication/event";
import AddMarkup from "layouts/authentication/Markup";
//import BusCancel from "layouts/agentbuscanceltable";
import AgentFlightCancel from "layouts/agentflightcanceltable";
import AgentHotelCancel from "layouts/agenthotelcanceltable";
import AgentbusCancel from "layouts/agentbuscanceltable";
import UserBusCancel from "layouts/userbuscanceltable";
import UserFlightCancel from "layouts/userflightcanceltable";
import UserHotelCancel from "layouts/userhotelcanceltable";
import UserBusBooking from "layouts/userbusBooking";
import UserHotelBooking from "layouts/userhotelBooking";
import AgentBusBooking from "layouts/agentbusBooking";
import AgentFlightBooking from "layouts/agentflightBooking";
import AgentHotelBooking from "layouts/agenthotelBooking";
import UserFlightBooking from "layouts/userflightBooking";
import VisaRequest from "layouts/visa request";
import FixedDepartureControl from "layouts/fixedDepartureControl";
import AddvertiseMent from "layouts/advertisement";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddvertiseMentForm from "layouts/authentication/add-addvertisement";
const routes = [
  {
    // type: "collapse",
    // name: "Sign In",
    key: "sign-In",
    // icon: <Icon fontSize="small">assignment</Icon>,
    route: "/",
    component: <SignUp />,
  },
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
    key: "table",
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
    route: "/visarequest",
    component: <VisaRequest />,
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
    route: "/authentication/fixed-Departure",
    component: <FixedDeparture />,
  },
  {
    type: "collapse",
    name: "Fixed Departure Control",
    key: "control",
    icon: <ScheduleIcon Size={20}>table_view</ScheduleIcon>,
    route: "/fixeddeparturecontrol",
    component: <FixedDepartureControl />,
  },
  {
    type: "collapse",
    name: "Advertisement",
    key: "advertisement",
    icon: <PlayCircleOutlineIcon fontSize="small" />,
    route: "/advertisement",
    component: <AddvertiseMent />,
  },
  {
    key: "flight table", // Unique key for the route
    route: "/flighttable", // Route path for FlightTables
    component: <FlightChange />, // FlightTables component
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
    key: "hotelchange", // Unique key for the route
    route: "/hotelchange", // Route path for FlightTables
    component: <HotelChange />, // FlightTables component
  },
  {
    key: "flightchange", // Unique key for the route
    route: "/flightchange", // Route path for FlightTables
    component: <FlightChange />, // FlightTables component
  },
  {
    key: "buschange", // Unique key for the route
    route: "/buschange", // Route path for FlightTables
    component: <BusChange />, // FlightTables component
  },
  {
    key: "busagentcancel", // Unique key for the route
    route: "/busagentcancel", // Route path for FlightTables
    component: <BusChange />, // FlightTables component
  },

  {
    key: "userbuschange", // Unique key for the route
    route: "/userbuschange", // Route path for FlightTables
    component: <UserBusChange />, // FlightTables component
  },

  {
    key: "userhotelchange", // Unique key for the route
    route: "/userhotelchange", // Route path for FlightTables
    component: <UserHotelChange />, // FlightTables component
  },
  {
    key: "userflightchange", // Unique key for the route
    route: "/userflighttable", // Route path for FlightTables
    component: <UserFlightChange />, // FlightTables component
  },
  {
    key: "agentflightcancel", // Unique key for the route
    route: "/agentflightcancel", // Route path for FlightTables
    component: <AgentFlightCancel />, // FlightTables component
  },
  {
    key: "agenthotelcancel", // Unique key for the route
    route: "/agenthotelcancel", // Route path for FlightTables
    component: <AgentHotelCancel />, // FlightTables component
  },

  {
    key: "agentbuscancel", // Unique key for the route
    route: "/agentbuscancel", // Route path for FlightTables
    component: <AgentbusCancel />, // FlightTables componentF
  },
  {
    key: "userbuscancel", // Unique key for the route
    route: "/userbuscancel", // Route path for FlightTables
    component: <UserBusCancel />, // FlightTables component
  },
  {
    key: "userflightcancel", // Unique key for the route
    route: "/userflightcancel", // Route path for FlightTables
    component: <UserFlightCancel />, // FlightTables component
  },
  {
    key: "userflightcancel", // Unique key for the route
    route: "/Userhotelcancel", // Route path for FlightTables
    component: <UserHotelCancel />, // FlightTables component
  },
  {
    key: "userflightbooking", // Unique key for the route
    route: "/userflightbooking", // Route path for FlightTables
    component: <UserFlightBooking />, // FlightTables component
  },
  {
    key: "userbusbooking", // Unique key for the route
    route: "/userbusbooking", // Route path for FlightTables
    component: <UserBusBooking />, // FlightTables component
  },
  {
    key: "userhotelbooking", // Unique key for the route
    route: "/userhotelbooking", // Route path for FlightTables
    component: <UserHotelBooking />, // FlightTables component
  },
  {
    key: "userhotelbooking", // Unique key for the route
    route: "/agentbusbooking", // Route path for FlightTables
    component: <AgentBusBooking />, // FlightTables component
  },

  {
    key: "agentflightbooking", // Unique key for the route
    route: "/agentflightbooking", // Route path for FlightTables
    component: <AgentFlightBooking />, // FlightTables component
  },

  {
    key: "agenthotelbooking", // Unique key for the route
    route: "/agenthotelbooking", // Route path for FlightTables
    component: <AgentHotelBooking />, // FlightTables component
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
    key: "subadmin",
    icon: <GroupAddIcon fontSize="small" />,
    route: "/authentication/subadmin",
    component: <SubAdmin />,
  },

  {
    type: "collapse",
    name: "Add admin",
    key: "admin",
    icon: <GroupAddIcon fontSize="small" />,
    route: "/authentication/admin",
    component: <Admin />,
  },
  {
    type: "collapse",
    name: "Add event",
    key: "event",
    icon: <GroupAddIcon fontSize="small" />,
    route: "/authentication/event",
    component: <Event />,
  },
  {
    type: "collapse",
    name: "Add markup",
    key: "markup",
    icon: <GroupAddIcon fontSize="small" />,
    route: "/authentication/addmarkup",
    component: <AddMarkup />,
  },
  {
    key: "addvertise",

    route: "/authentication/addadvertisement",
    component: <AddvertiseMentForm />,
  },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/authentication/sign-in",
  //   component: <SignIn />,
  // },
];

export default routes;
