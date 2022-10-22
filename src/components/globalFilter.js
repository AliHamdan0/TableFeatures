export default function GlobalFilter({ filter, setFilter }) {
  return (
    <span style={{ fontSize: "19px", fontWeight: "500" }}>
      Search :{" "}
      <input
        type="text"
        className="searchGlobal"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
      <span
        style={{
          color: "grey",
          fontSize: "18px",
          fontStyle: "italic",
          marginLeft: "20px",
        }}
      >
        **Filter the records according to the search input
      </span>
    </span>
  );
}
