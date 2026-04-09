import { Link, Outlet, useLocation } from "react-router-dom";
import { storage } from "../utils/storage";

const CandidateLayout = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== "/candidate" && location.pathname.startsWith(path));

  const navClass = (path: string) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive(path)
        ? "bg-cyan-50 text-cyan-700"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }`;

  const handleLogout = () => {
    storage.clearAuth();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] h-80 w-80 rounded-full bg-blue-100 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link to="/candidate" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white shadow-sm">
              J
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900">Job Portal</p>
              <p className="text-xs text-slate-500">Candidate Workspace</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white p-1 lg:flex">
            <Link to="/candidate" className={navClass("/candidate")}>
              Trang chủ
            </Link>
            <Link to="/candidate/jobs" className={navClass("/candidate/jobs")}>
              Việc làm
            </Link>
            <Link
              to="/candidate/applied-jobs"
              className={navClass("/candidate/applied-jobs")}
            >
              Đã ứng tuyển
            </Link>
            <Link
              to="/candidate/saved-jobs"
              className={navClass("/candidate/saved-jobs")}
            >
              Đã lưu
            </Link>
            <Link to="/candidate/cv" className={navClass("/candidate/cv")}>
              CV
            </Link>
            <Link to="/candidate/profile" className={navClass("/candidate/profile")}>
              Hồ sơ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/candidate/profile"
              className="hidden h-11 items-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50 md:inline-flex"
            >
              Hồ sơ của tôi
            </Link>

            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700">
                LP
              </div>
              <button
                onClick={handleLogout}
                className="pr-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-7xl px-6 py-8 lg:px-8">
        <Outlet />
      </main>

      <footer className="relative mt-12 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Job Portal Candidate Area</p>
          <p>Thiết kế giao diện ứng viên cho đồ án tốt nghiệp.</p>
        </div>
      </footer>
    </div>
  );
};

export default CandidateLayout;