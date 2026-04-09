import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navClass = (path: string) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive(path)
        ? "bg-slate-100 text-slate-900"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }`;

  const mobileNavClass = (path: string) =>
    `rounded-2xl px-4 py-3 text-sm font-medium transition ${
      isActive(path)
        ? "bg-cyan-50 text-cyan-700"
        : "text-slate-700 hover:bg-slate-50"
    }`;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] h-80 w-80 rounded-full bg-blue-100 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white shadow-md">
              J
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900">Job Portal</p>
              <p className="text-xs text-slate-500">Smart Recruitment Platform</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white p-1 md:flex">
            <Link to="/" className={navClass("/")}>
              Trang chủ
            </Link>
            <Link to="/jobs" className={navClass("/jobs")}>
              Việc làm
            </Link>
            <Link to="/companies" className={navClass("/companies")}>
              Công ty
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Đăng nhập
            </Link>

            <Link
              to="/register"
              className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.01] active:scale-[0.99]"
            >
              Đăng ký
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{isMobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
              <Link
                to="/"
                className={mobileNavClass("/")}
                onClick={closeMobileMenu}
              >
                Trang chủ
              </Link>

              <Link
                to="/jobs"
                className={mobileNavClass("/jobs")}
                onClick={closeMobileMenu}
              >
                Việc làm
              </Link>

              <Link
                to="/companies"
                className={mobileNavClass("/companies")}
                onClick={closeMobileMenu}
              >
                Công ty
              </Link>

              <div className="mt-2 grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Đăng nhập
                </Link>

                <Link
                  to="/register"
                  onClick={closeMobileMenu}
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-md"
                >
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="relative">
        <Outlet />
      </main>

      <footer className="relative mt-16 border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white shadow-sm">
                J
              </div>
              <div>
                <p className="text-base font-semibold text-slate-900">Job Portal</p>
                <p className="text-xs text-slate-500">Smart Recruitment Platform</p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              Nền tảng hỗ trợ kết nối ứng viên và nhà tuyển dụng với giao diện hiện đại,
              trực quan, phù hợp để phát triển thành hệ thống tuyển dụng hoàn chỉnh.
            </p>

            <div className="mt-5 flex gap-3">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                React
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                TypeScript
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                Tailwind
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">
              Điều hướng
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link to="/" className="transition hover:text-cyan-700">
                Trang chủ
              </Link>
              <Link to="/jobs" className="transition hover:text-cyan-700">
                Việc làm
              </Link>
              <Link to="/companies" className="transition hover:text-cyan-700">
                Công ty
              </Link>
              <Link to="/login" className="transition hover:text-cyan-700">
                Đăng nhập
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">
              Đối tượng
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <span>Ứng viên</span>
              <span>Nhà tuyển dụng</span>
              <span>Quản trị viên</span>
              <span>Sinh viên / Fresher</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">
              Liên hệ
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>Email: support@jobportal.vn</p>
              <p>Hotline: 0123 456 789</p>
              <p>Địa chỉ: Hà Nội, Việt Nam</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
            <p>© 2026 Job Portal. All rights reserved.</p>
            <p>Thiết kế cho đồ án tốt nghiệp Web Portal.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;