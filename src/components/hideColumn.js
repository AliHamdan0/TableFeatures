import MockData from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { useTable } from "react-table";
import { useMemo } from "react";
import { Checkbox } from "./checkbox";
function CoumnHiding() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MockData, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable({ columns, data });
  return (
    <>
      <div>
        <div>
          <Checkbox {...getToggleHideAllColumnsProps()} />
          Show all coumns
        </div>
        <div className="contShowCol">
          {allColumns.map((column) => (
            <div key={column.id}>
              <Checkbox {...column.getToggleHiddenProps()} />
              Show {column.Header}{" "}
            </div>
          ))}
        </div>
      </div>
      <table
        {...getTableProps()}
        style={{ border: "solid 1px blue", width: "100%" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr
              {...footerGroup.getFooterGroupProps()}
              style={{
                borderTop: "solid 3px red",
                background: "aliceblue",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
}
export default CoumnHiding;
