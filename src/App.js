import BasicTable from "./components/basicTable";
import HeaderGroups from "./components/headerGroup";
import SortingTable from "./components/sortingTable";
import FilterTable from "./components/filterTable";
import ColumnFilter from "./components/columnFilter";
import PaginationTable from "./components/pagination";
import SelectingRows from "./components/selectingRows";
import OrderColumns from "./components/orderColumns";
import CoumnHiding from "./components/hideColumn";
import StickyColumns from "./components/stickyColumns";
import DragDropTable from "./components/DragandDropTable";
import { useState } from "react";
import "./App.css";
function App() {
  const [type, setType] = useState(1);
  return (
    <div className="container">
      <div className="center">
        <div className="cont">
          <h6 className="headetText">Select A Feature To Apply On The Table</h6>
          <select
            className="select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value={1}> Basic Table </option>
            <option value={2}> Header Groups </option>
            <option value={3}>Sorting Table</option>
            <option value={4}>Filter Table</option>
            <option value={5}>Column Filter</option>
            <option value={6}>Pagination Table</option>
            <option value={7}>Selecting Rows</option>
            <option value={8}>Order Columns</option>
            <option value={9}>Coumn Hiding</option>
            <option value={10}>Sticky Columns</option>
            <option value={11}>DragDrop Table</option>
          </select>
        </div>
        <div style={{ width: "100%" }}>
          {type == 1 && <BasicTable />}
          {type == 2 && <HeaderGroups />}
          {type == 3 && <SortingTable />}
          {type == 4 && <FilterTable />}
          {type == 5 && <ColumnFilter />}
          {type == 6 && <PaginationTable />}
          {type == 7 && <SelectingRows />}
          {type == 8 && <OrderColumns />}
          {type == 9 && <CoumnHiding />}
          {type == 10 && <StickyColumns />}
          {type == 11 && <DragDropTable />}
        </div>
      </div>
    </div>
  );
}

export default App;
