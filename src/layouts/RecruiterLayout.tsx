import { Link, Outlet } from "react-router-dom";
import { storage } from "../utils/storage";

const RecruiterLayout = () => {
  const handleLogout = () => {
    storage.clearAuth();
    window.location.href = "/login";
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "240px", borderRight: "1px solid #ddd", padding: "20px" }}>
        <h2>Recruiter Panel</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
          <Link to="/recruiter">Dashboard</Link>
          <Link to="/recruiter/company-profile">Company Profile</Link>
          <Link to="/recruiter/post-job">Post Job</Link>
          <Link to="/recruiter/my-jobs">My Jobs</Link>
          <Link to="/recruiter/applications">Applications</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      <main style={{ flex: 1, padding: "24px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default RecruiterLayout;