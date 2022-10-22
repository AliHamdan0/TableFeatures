import MockData from "./MOCK_DATA.json";
import { STICKY_COLUMNS } from "./stickyColumnsArray";
import { useTable, useBlockLayout } from "react-table";
import { useMemo } from "react";
import { useSticky } from "react-table-sticky";
import { Styles } from "./styledTable";
function StickyColumns() {
  const columns = useMemo(() => STICKY_COLUMNS, []);
  const data = useMemo(() => MockData, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({ columns, data }, useBlockLayout, useSticky);
  return (
    <>
      <p
        style={{
          color: "grey",
          fontSize: "18px",
          fontStyle: "italic",
          marginLeft: "20px",
          marginBottom: "15px",
        }}
      >
        **The Id col is Sticky on left and Country col is sticky on right
      </p>
      <Styles>
        <div
          {...getTableProps()}
          className="table sticky"
          style={{ width: 1000, height: 500 }}
        >
          <div className="header">
            {headerGroups.map((headerGroup) => (
              <div {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column) => (
                  <div {...column.getHeaderProps()} className="th">
                    {column.render("Header")}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div {...getTableBodyProps()} className="body">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <div {...row.getRowProps()} className="tr">
                  {row.cells.map((cell) => (
                    <div {...cell.getCellProps()} className="td">
                      {cell.render("Cell")}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="footer">
            {footerGroups.map((footerGroup) => (
              <div {...footerGroup.getHeaderGroupProps()} className="tr">
                {footerGroup.headers.map((column) => (
                  <div {...column.getHeaderProps()} className="td">
                    {column.render("Footer")}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Styles>
    </>
  );
}
export default StickyColumns;
