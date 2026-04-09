import { Link, Outlet } from "react-router-dom";
import { storage } from "../utils/storage";

const CandidateLayout = () => {
  const handleLogout = () => {
    storage.clearAuth();
    window.location.href = "/login";
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "240px", borderRight: "1px solid #ddd", padding: "20px" }}>
        <h2>Candidate Panel</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
          <Link to="/candidate">Dashboard</Link>
          <Link to="/candidate/profile">Profile</Link>
          <Link to="/candidate/cv">My CV</Link>
          <Link to="/candidate/applied-jobs">Applied Jobs</Link>
          <Link to="/candidate/saved-jobs">Saved Jobs</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      <main style={{ flex: 1, padding: "24px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default CandidateLayout;