import { Link, Outlet } from "react-router-dom";
import { storage } from "../utils/storage";

const AdminLayout = () => {
  const handleLogout = () => {
    storage.clearAuth();
    window.location.href = "/login";
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "240px", borderRight: "1px solid #ddd", padding: "20px" }}>
        <h2>Admin Panel</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/jobs">Jobs</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      <main style={{ flex: 1, padding: "24px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;