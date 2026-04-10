import { Link, Outlet, useLocation } from "react-router-dom";
import { storage } from "../utils/storage";

const RecruiterLayout = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== "/recruiter" && location.pathname.startsWith(path));

  const navClass = (path: string) =>
    `flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition ${
      isActive(path)
        ? "bg-cyan-50 text-cyan-700"
        : "text-slate-700 hover:bg-slate-50"
    }`;

  const handleLogout = () => {
    storage.clearAuth();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-slate-200 bg-white">
          <div className="sticky top-0 flex h-screen flex-col">
            <div className="border-b border-slate-200 px-6 py-5">
              <Link to="/" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white shadow-sm">
                  J
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900">Recruiter Portal</p>
                  <p className="text-xs text-slate-500">Employer Workspace</p>
                </div>
              </Link>
            </div>

            <div className="px-4 py-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80"
                    alt="Company logo"
                    className="h-12 w-12 rounded-2xl border border-slate-200 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">TechVision Vietnam</p>
                    <p className="text-xs text-slate-500">Employer account</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 px-4 pb-6">
              <nav className="space-y-2">
                <Link to="/recruiter" className={navClass("/recruiter")}>
                  Dashboard
                </Link>
                <Link
                  to="/recruiter/company-profile"
                  className={navClass("/recruiter/company-profile")}
                >
                  Hồ sơ công ty
                </Link>
                <Link
                  to="/recruiter/post-job"
                  className={navClass("/recruiter/post-job")}
                >
                  Đăng tin tuyển dụng
                </Link>
                <Link
                  to="/recruiter/my-jobs"
                  className={navClass("/recruiter/my-jobs")}
                >
                  Quản lý tin tuyển dụng
                </Link>
                <Link
                  to="/recruiter/applications"
                  className={navClass("/recruiter/applications")}
                >
                  Ứng viên ứng tuyển
                </Link>
              </nav>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Mẹo tuyển dụng</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Hồ sơ công ty rõ ràng và JD chi tiết giúp tăng tỷ lệ ứng viên phù hợp.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 p-4">
              <button
                onClick={handleLogout}
                className="inline-flex h-11 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="flex h-20 items-center justify-between px-6 lg:px-8">
              <div>
                <p className="text-sm text-slate-500">Recruiter Workspace</p>
                <h1 className="text-xl font-bold text-slate-900">Không gian nhà tuyển dụng</h1>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/recruiter/post-job"
                  className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.01]"
                >
                  Đăng tin mới
                </Link>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-sm font-semibold text-cyan-700">
                  TV
                </div>
              </div>
            </div>
          </header>

          <main className="px-6 py-8 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RecruiterLayout;