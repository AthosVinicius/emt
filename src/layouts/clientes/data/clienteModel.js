/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function data() {
  const Cliente = ({ name, telefone }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{telefone}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Endereco = ({ endereco }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {endereco}
      </MDTypography>
    </MDBox>
  );

  const Indicador = ({ indicador }) => {
    return (
      <MDBox ml={-1}>
        {indicador ? (
          <MDBadge
            badgeContent="Sim"
            color="success"
            variant="gradient"
            size="sm"
          />
        ) : (
          <MDBadge
            badgeContent="Não"
            color="error"
            variant="gradient"
            size="sm"
          />
        )}
      </MDBox>
    );
  };

  const Cidade = ({ nome }) => {
    switch (nome) {
      case "Sobradinho":
        return (
          <MDBox>
            <MDBadge
              badgeContent={nome}
              color="blue"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        );
      case "Lago Norte":
        return (
          <MDBox>
            <MDBadge
              badgeContent={nome}
              color="error"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        );
      default:
        <MDBox>
          <MDBadge
            badgeContent="Não-Definido"
            color="light"
            variant="gradient"
            size="sm"
          />
          ;
        </MDBox>;
    }
  };

  return {
    columns: [
      { Header: "cliente", accessor: "cliente", align: "left" },
      { Header: "endereço", accessor: "endereco", align: "left" },
      { Header: "cep", accessor: "cep", align: "center" },
      { Header: "recorrente", accessor: "recorrente", align: "center" },
      { Header: "Pessoa Jurídica", accessor: "inPJ", align: "center" },
      { Header: "cidade", accessor: "cidade", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        cliente: (
          <Cliente name="Vitor Martins" telefone="+55 (61) 99669-2204" />
        ),
        endereco: <Endereco endereco="QMS 52 Módulo B casa 37" />,
        cep: "73080-320",
        recorrente: <Indicador indicador={true} />,
        inPJ: <Indicador indicador={false} />,
        cidade: <Cidade nome={"Sobradinho"} />,
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
      {
        cliente: <Cliente name="André Such" telefone="+55 (61) 99669-2204" />,
        endereco: (
          <Endereco endereco="SHIN QI 11 Conjunto 10 casa 5" cep="Lago Norte" />
        ),
        cep: "73080-000",
        recorrente: <Indicador indicador={false} />,
        inPJ: <Indicador indicador={true} />,
        cidade: <Cidade nome={"Lago Norte"} />,
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
