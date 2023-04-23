/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import MDButton from "components/MDButton";
import { Checkbox } from "@mui/material";
import MDInput from "components/MDInput";

function Tables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
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
        <MDTypography variant="h1" color="white" alignItems="center">
          Cadastrar Cliente
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3} px={3}>
        <MDBox component="form" role="form">
          <MDBox mb={2}>
            <MDInput type="text" label="Nome" variant="standard"  />
          </MDBox>
          <MDBox mb={2}>
            <MDInput type="tel" label="Telefone" variant="standard" />
          </MDBox>
          <MDBox mb={2}>
            <MDInput type="text" label="Endereço" variant="standard" />
          </MDBox>
          <MDBox mb={2}>
            <MDInput type="number" label="CEP" variant="standard" />
          </MDBox>
          <MDBox mb={2}>
            <Checkbox />
            <MDTypography variant="button" fontWeight="regular" color="text">
              PJ?
            </MDTypography>
            <Checkbox />
            <MDTypography variant="button" fontWeight="regular" color="text">
              Recorrente?
            </MDTypography>
          <MDBox mb={2}>
            <MDInput type="text" label="CPF ou CNPJ (Opcional)" variant="standard" />
          </MDBox>
          <MDBox mb={2}>
            <MDInput type="text" label="Observação" variant="standard" fullheight />
          </MDBox>
        </MDBox>
          <MDBox display="flex" alignItems="center" ml={-1}>
          </MDBox>
          <MDBox mt={4} mb={1}>
            <MDButton variant="gradient" color="info">
              Cadastrar Cliente
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
