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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import AgentDataTable from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import Data from "layouts/tables/data/usersTableData";
import SubAdmindata from "layouts/tables/data/subAdmin";
import MDInput from "components/MDInput";
// import agentRequest from "layouts/tables/data/agentRequest";
function Tables() {
  // const { columns: rColumns, rows: rRows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  // const { columns: rColumns, rows: rRows } = usersTableData();
  //const { columns: sColumns, rows: sRows } = subAdmin();
  // const { columns: aColumns, rows: aRows } = agentRequest();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              {/* <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                {" "}
                <MDTypography variant="h6" color="white">
                  Agent Table
                </MDTypography>
              </MDBox> */}
              <MDBox pt={3}>
                {/* <DataTable
                  table={{ columns: rColumns, rows: rRows }}
                  isSorted={true}
                  // entriesPerPage={false}
                  // showTotalEntries={false}
                  noEndBorder
                /> */}
                <AgentDataTable />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              {/* <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  User Table
                </MDTypography>
              </MDBox> */}
              <MDBox pt={3}>
                {/* <DataTable
                  table={{ columns: rColumns, rows: rRows }}
                  isSorted={true}
                  // entriesPerPage={false}
                  // showTotalEntries={false}
                  noEndBorder
                /> */}
                <Data />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              {/* <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  SubAdmin Table
                </MDTypography>
              </MDBox> */}
              <MDBox pt={3}>
                {/* <DataTable
                  table={{ columns: sColumns, rows: sRows }}
                  isSorted={true}
                  entriesPerPage={true}
                  showTotalEntries={true}
                  noEndBorder
                /> */}
                <SubAdmindata />
              </MDBox>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Agents Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={true}
                  entriesPerPage={true}
                  showTotalEntries={true}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
