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
import MDBadge from "components/MDBadge";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const pedido = {
  data: "23/04/2023",
  paoBeijoVeganoBatataDocePadrao: 1,
  paoBeijoVeganoBatataDoceGraos: 2,
  biscoitoSuico: 1,
  paoBeijoVeganoBatataDocePadrao1kg: 0,
  paoBeijoVeganoBatataDoceGraos1kg: 0,
  paoQueijo: 1,
  biscoitoFerradura: 1,
  idPessoa: "61912345678",
  endereco: "Rua 1 casa 12",
  cidade: "Cruzeiro",
  nome: "Maria",
  valorTotalCompra: "127",
  inPagamento: true,
  inEntregue: false,
  dataEntrega: "25/04/2023",
};

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
          <MDBadge
            badgeContent={nome}
            color="blue"
            variant="gradient"
            size="sm"
          />
        );
      case "Lago Norte":
        return (
          <MDBadge
            badgeContent={nome}
            color="error"
            variant="gradient"
            size="sm"
          />
        );
      default:
        <MDBadge
          badgeContent="Não-Definido"
          color="light"
          variant="gradient"
          size="sm"
        />;
    }
  };

  return {
    columns: [
      { Header: "cliente", accessor: "cliente", align: "left" },
      { Header: "cidade", accessor: "cidade", align: "center" },
      { Header: "data de entrega", accessor: "dataEntrega", align: "center" },
      { Header: "pago", accessor: "stPagamento", align: "center" },
      { Header: "entregue", accessor: "stEntregue", align: "center" },
    ],

    rows: [
      {
        cliente: (
          <Cliente name="Vitor Martins" telefone="+55 (61) 99669-2204" />
        ),
        cidade: <Cidade nome={"Sobradinho"} />,
        dataEntrega: pedido.dataEntrega,
        stPagamento: <Indicador indicador={pedido.inPagamento} />,
        stEntregue: <Indicador indicador={pedido.inEntregue} />,
      },
    ],
  };
}
