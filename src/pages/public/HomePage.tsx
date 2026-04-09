import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            Nền tảng tuyển dụng hiện đại
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Tìm việc nhanh hơn,
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              tuyển dụng thông minh hơn
            </span>
            .
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Job Portal giúp ứng viên tiếp cận cơ hội phù hợp và hỗ trợ nhà tuyển dụng
            quản lý tin tuyển dụng, hồ sơ ứng tuyển một cách trực quan, nhanh chóng.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/register"
              className="inline-flex h-12 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01] hover:from-cyan-400 hover:to-blue-500 active:scale-[0.99]"
            >
              Bắt đầu ngay
            </Link>

            <Link
              to="/login"
              className="inline-flex h-12 items-center rounded-2xl border border-white/10 bg-white/5 px-6 text-sm font-medium text-slate-200 transition hover:bg-white/10"
            >
              Tôi đã có tài khoản
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-2xl font-bold text-white">10K+</p>
              <p className="mt-1 text-sm text-slate-400">Ứng viên</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="mt-1 text-sm text-slate-400">Doanh nghiệp</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="mt-1 text-sm text-slate-400">Hỗ trợ</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-white">Bảng điều khiển tuyển dụng</p>
                <p className="text-sm text-slate-400">Theo dõi hoạt động hệ thống</p>
              </div>
              <div className="rounded-2xl bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                Online
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-200">Frontend Developer Intern</p>
                  <span className="text-xs text-cyan-400">Mới</span>
                </div>
                <p className="text-sm text-slate-400">Công ty ABC • Hà Nội • Full-time</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-200">Java Spring Boot Intern</p>
                  <span className="text-xs text-fuchsia-400">Hot</span>
                </div>
                <p className="text-sm text-slate-400">Công ty XYZ • Hybrid • Fresher/Intern</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-2xl font-bold text-white">128</p>
                  <p className="mt-1 text-sm text-slate-400">Lượt ứng tuyển</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-2xl font-bold text-white">36</p>
                  <p className="mt-1 text-sm text-slate-400">Việc làm mới</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;