import { useEffect, useState } from "react";
import { fetchNotifications } from "./api/notifications";
import { getTopNotifications } from "./utils/priority";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const limit = 5;

  useEffect(() => {
    fetchNotifications().then(setData);
  }, []);

  // 🔹 Priority notifications
  const top10 = getTopNotifications(data);

  // 🔹 Filter logic
  const filteredData = filter
    ? data.filter((n) => n.Type === filter)
    : data;

  // 🔹 Pagination logic
  const paginatedData = filteredData.slice(
    (page - 1) * limit,
    page * limit
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "800px", margin: "auto" }}>
      
      {/* 🔥 TOP NOTIFICATIONS */}
      <h2 style={{ color: "#2c3e50" }}>Top Notifications</h2>

      {top10.map((n) => (
        <div
          key={n.ID}
          style={{
            padding: "12px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            background: "#f9f9f9"
          }}
        >
          <strong>{n.Type}</strong> - {n.Message}
          <br />
          <small style={{ color: "gray" }}>
            {new Date(n.Timestamp).toLocaleString()}
          </small>
        </div>
      ))}

      <hr />

      {/* 🔥 ALL NOTIFICATIONS */}
      <h2 style={{ color: "#2c3e50", marginTop: "30px" }}>
        All Notifications
      </h2>

      {/* 🔽 FILTER */}
      <select
        style={{ padding: "6px", marginBottom: "15px" }}
        onChange={(e) => {
          setFilter(e.target.value);
          setPage(1); // reset page
        }}
      >
        <option value="">All</option>
        <option value="Placement">Placement</option>
        <option value="Result">Result</option>
        <option value="Event">Event</option>
      </select>

      {/* 🔽 LIST */}
      {paginatedData.map((n) => (
        <div
          key={n.ID}
          style={{
            padding: "12px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            background: "#f9f9f9"
          }}
        >
          <strong>{n.Type}</strong> - {n.Message}
          <br />
          <small style={{ color: "gray" }}>
            {new Date(n.Timestamp).toLocaleString()}
          </small>
        </div>
      ))}

      {/* 🔽 PAGINATION */}
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          style={{ marginRight: "10px", padding: "5px 10px" }}
        >
          Prev
        </button>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page * limit >= filteredData.length}
          style={{ padding: "5px 10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;