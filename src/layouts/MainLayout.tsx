import { Link, Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-bold text-white shadow-lg shadow-cyan-500/20">
              J
            </div>
            <div>
              <p className="text-base font-semibold text-white">Job Portal</p>
              <p className="text-xs text-slate-400">Smart Recruitment Platform</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
            <Link
              to="/"
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive("/")
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              Trang chủ
            </Link>

            <Link
              to="/jobs"
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive("/jobs")
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              Việc làm
            </Link>

            <Link
              to="/companies"
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive("/companies")
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              Công ty
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden h-11 items-center rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-slate-200 transition hover:bg-white/10 sm:inline-flex"
            >
              Đăng nhập
            </Link>

            <Link
              to="/register"
              className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01] hover:from-cyan-400 hover:to-blue-500 active:scale-[0.99]"
            >
              Đăng ký
            </Link>
          </div>
        </div>
      </header>

      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;