import { Link, Outlet, useLocation } from "react-router-dom";
import { storage } from "../utils/storage";

const AdminLayout = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== "/admin" && location.pathname.startsWith(path));

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
                  <p className="text-base font-semibold text-slate-900">Admin Portal</p>
                  <p className="text-xs text-slate-500">System Management</p>
                </div>
              </Link>
            </div>

            <div className="px-4 py-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Xin chào,</p>
                <p className="mt-1 font-semibold text-slate-900">System Administrator</p>
                <p className="mt-1 text-xs text-slate-500">Toàn quyền hệ thống</p>
              </div>
            </div>

            <div className="flex-1 px-4 pb-6">
              <nav className="space-y-2">
                <Link to="/admin" className={navClass("/admin")}>
                  Dashboard
                </Link>
                <Link to="/admin/users" className={navClass("/admin/users")}>
                  Quản lý người dùng
                </Link>
                <Link to="/admin/jobs" className={navClass("/admin/jobs")}>
                  Quản lý việc làm
                </Link>
                <Link to="/admin/companies" className={navClass("/admin/companies")}>
                  Quản lý công ty
                </Link>
                <Link to="/admin/categories" className={navClass("/admin/categories")}>
                  Danh mục ngành nghề
                </Link>
                <Link to="/admin/reports" className={navClass("/admin/reports")}>
                  Báo cáo & thống kê
                </Link>
                <Link to="/admin/settings" className={navClass("/admin/settings")}>
                  Cài đặt hệ thống
                </Link>
              </nav>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Quản trị hệ thống</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Theo dõi người dùng, kiểm duyệt nội dung và tối ưu hiệu suất nền tảng.
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
                <p className="text-sm text-slate-500">Admin Workspace</p>
                <h1 className="text-xl font-bold text-slate-900">Không gian quản trị hệ thống</h1>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Tìm nhanh..."
                  className="hidden h-11 w-64 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none lg:block"
                />
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-sm font-semibold text-cyan-700">
                  AD
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

export default AdminLayout;