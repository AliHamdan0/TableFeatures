import { useAsyncDebounce } from "react-table";
import { useState } from "react";
export default function ColFilter({ column }) {
  const { filterValue, setFilter } = column;
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || "");
  }, 1000);
  const [value, setValue] = useState(filterValue);
  return (
    <span>
      Search :{" "}
      <input
        type="text"
        value={value || ""}
        className="searchColumn"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
}
