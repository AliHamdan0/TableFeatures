import MockData from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { useTable } from "react-table";
import { useMemo, useCallback, useState } from "react";
import { Styles } from "./styledDragTable";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";
import { Row } from "./dragRow";
function DragDropTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MockData, []);
  const getRowId = useCallback((row) => {
    return row.id;
  }, []);
  const [records, setRecords] = useState(data);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({ data: records, columns, getRowId });

  const moveRow = (dragIndex, hoverIndex) => {
    const dragRecord = records[dragIndex];
    setRecords(
      update(records, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRecord],
        ],
      })
    );
  };

  return (
    <Styles>
      <DndProvider backend={HTML5Backend}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                <th></th>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(
              (row, index) =>
                prepareRow(row) || (
                  <Row
                    index={index}
                    row={row}
                    moveRow={moveRow}
                    {...row.getRowProps()}
                  />
                )
            )}
          </tbody>
        </table>
      </DndProvider>
    </Styles>
  );
}
export default DragDropTable;
