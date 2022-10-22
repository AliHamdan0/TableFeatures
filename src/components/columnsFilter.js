import ColFilter from "./colFilter";

export const COLUMNSFilters = [
  {
    Header: "Id",
    accessor: "id",
    Filter: ColFilter,
    disableFilters: true,
    Footer: "Id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Filter: ColFilter,
    Footer: "First Name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Filter: ColFilter,
    Footer: "Last Name",
  },
  {
    Header: "Email",
    accessor: "email",
    Filter: ColFilter,
    disableFilters: true,
    Footer: "Email",
  },
  {
    Header: "Date of Birth",
    Filter: ColFilter,
    accessor: "data_of_birth",
    Footer: "Date of Birth",
  },
  {
    Header: "Age",
    accessor: "age",
    Filter: ColFilter,
    Footer: "Age",
  },
  {
    Header: "Country",
    accessor: "country",
    Filter: ColFilter,
    Footer: "Country",
  },
];
