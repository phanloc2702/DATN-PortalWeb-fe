import type { ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AuthLayout = ({ title, subtitle, children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden overflow-hidden lg:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-sky-50 to-blue-100" />
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-200/70 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-200/60 blur-3xl" />

          <div className="relative z-10 flex h-full w-full flex-col justify-between p-12">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
                <div className="h-3 w-3 rounded-full bg-cyan-500" />
                <span className="text-sm font-medium text-slate-700">
                  Job Portal Platform
                </span>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-700">
                Smart recruitment system
              </p>

              <h1 className="text-5xl font-bold leading-tight text-slate-900">
                Kết nối{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  ứng viên
                </span>{" "}
                và{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  nhà tuyển dụng
                </span>
                .
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Nền tảng hỗ trợ ứng tuyển và tuyển dụng với giao diện hiện đại,
                trực quan, phù hợp cho đồ án web portal.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-2xl font-bold text-slate-900">10K+</p>
                <p className="mt-1 text-sm text-slate-600">Ứng viên tiềm năng</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="mt-1 text-sm text-slate-600">Doanh nghiệp</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-2xl font-bold text-slate-900">24/7</p>
                <p className="mt-1 text-sm text-slate-600">Hỗ trợ nền tảng</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <div className="h-3 w-3 rounded-full bg-cyan-500" />
                <span className="text-sm font-medium text-slate-700">
                  Job Portal Platform
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {subtitle}
                </p>
              </div>

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;