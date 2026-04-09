import type { ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AuthLayout = ({ title, subtitle, children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden overflow-hidden lg:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20" />
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative z-10 flex h-full w-full flex-col justify-between p-12">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                <div className="h-3 w-3 rounded-full bg-cyan-400" />
                <span className="text-sm font-medium text-slate-200">
                  Job Portal Platform
                </span>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
                Smart recruitment system
              </p>

              <h1 className="text-5xl font-bold leading-tight">
                Kết nối{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  ứng viên
                </span>{" "}
                và{" "}
                <span className="bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                  nhà tuyển dụng
                </span>
                .
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Xây dựng trải nghiệm tuyển dụng hiện đại với giao diện trực quan,
                quản lý hồ sơ nhanh chóng và quy trình ứng tuyển thông minh.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white">10K+</p>
                <p className="mt-1 text-sm text-slate-300">Ứng viên tiềm năng</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="mt-1 text-sm text-slate-300">Doanh nghiệp</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="mt-1 text-sm text-slate-300">Hỗ trợ nền tảng</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-cyan-400" />
                <span className="text-sm font-medium text-slate-300">
                  Job Portal Platform
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
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