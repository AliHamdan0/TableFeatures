export const COLUMNS_Group = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
  },
  {
    Header: "FUll Name",
    Footer: "Full Name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
        Footer: "First Name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Footer: "Last Name",
      },
    ],
  },
  {
    Header: "INFO",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        accessor: "email",
        Footer: "Email",
      },
      {
        Header: "Date of Birth",
        accessor: "data_of_birth",
        Footer: "Date of Birth",
      },
      {
        Header: "Age",
        accessor: "age",
        Footer: "Age",
      },
      {
        Header: "Country",
        accessor: "country",
        Footer: "Country",
      },
    ],
  },
];
