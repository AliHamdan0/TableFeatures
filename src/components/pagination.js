import MockData from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { useTable } from "react-table";
import { useMemo } from "react";
import { usePagination } from "react-table";
import { useState } from "react";
function PaginationTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MockData, []);
  const [goPage, setGoPage] = useState(1);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    footerGroups,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    setPageSize,
  } = useTable({ columns, data }, usePagination);
  const { pageIndex, pageSize } = state;
  return (
    <>
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
          {page.map((row) => {
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
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <button
          onClick={previousPage}
          disabled={!canPreviousPage}
          className="prevButton"
        >
          Prev
        </button>
        <span style={{ pageSize: "18px", fontWeight: "600" }}>
          Page: {pageIndex + 1} of {pageOptions.length}
        </span>
        <button
          onClick={nextPage}
          disabled={!canNextPage}
          className="nextButton"
        >
          Next
        </button>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div style={{ margin: "0px 20px" }}>
          <span
            style={{ pageSize: "18px", fontWeight: "600", marginRight: "10px" }}
          >
            Go TO page
          </span>
          <input
            type="number"
            value={goPage}
            onChange={(e) => setGoPage(e.target.value)}
            className="inputGo"
          />
          <button
            onClick={() => {
              gotoPage(Number(goPage - 1));
              setPageSize(10);
            }}
            className="goButton"
          >
            GO
          </button>
        </div>
        <div>
          <span style={{ pageSize: "18px", fontWeight: "600" }}>
            Page Size :
          </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
            className="sizeSelect"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
      </div>
    </>
  );
}
export default PaginationTable;
