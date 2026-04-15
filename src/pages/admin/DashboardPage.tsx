const activities = [
  "Có 12 công việc mới chờ kiểm duyệt.",
  "3 công ty vừa cập nhật hồ sơ doanh nghiệp.",
  "18 tài khoản ứng viên mới được tạo hôm nay.",
  "2 báo cáo vi phạm đang chờ xử lý.",
];

const DashboardPage = () => {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white shadow-sm">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-medium text-cyan-100">Admin Dashboard</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight">
              Theo dõi và vận hành toàn bộ hệ thống tuyển dụng
            </h2>
            <p className="mt-4 text-base leading-8 text-cyan-50/90">
              Quản trị người dùng, việc làm, công ty và dữ liệu thống kê để đảm bảo
              nền tảng hoạt động ổn định, minh bạch và hiệu quả.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
            alt="Admin dashboard"
            className="h-full min-h-[260px] w-full object-cover"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">12,540</p>
          <p className="mt-2 text-sm text-slate-500">Tổng người dùng</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">2,184</p>
          <p className="mt-2 text-sm text-slate-500">Việc làm đang hiển thị</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">532</p>
          <p className="mt-2 text-sm text-slate-500">Doanh nghiệp hoạt động</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">126</p>
          <p className="mt-2 text-sm text-slate-500">Nội dung chờ duyệt</p>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Tổng quan hoạt động</h3>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Ứng viên mới hôm nay</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">18</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Nhà tuyển dụng mới</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">4</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Đơn ứng tuyển hôm nay</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">236</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Báo cáo vi phạm</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">2</p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Hoạt động gần đây</h3>

          <div className="mt-5 space-y-4">
            {activities.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;