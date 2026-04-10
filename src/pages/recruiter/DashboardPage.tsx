import { Link } from "react-router-dom";

const recentJobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    status: "Đang tuyển",
    applicants: 24,
    postedAt: "08/04/2026",
  },
  {
    id: 2,
    title: "Java Spring Boot Fresher",
    status: "Đang tuyển",
    applicants: 18,
    postedAt: "06/04/2026",
  },
  {
    id: 3,
    title: "QA Tester Intern",
    status: "Nháp",
    applicants: 0,
    postedAt: "05/04/2026",
  },
];

const recentApplicants = [
  {
    name: "Nguyễn Minh Anh",
    position: "Frontend Developer Intern",
    status: "Mới ứng tuyển",
  },
  {
    name: "Trần Đức Long",
    position: "Java Spring Boot Fresher",
    status: "Đã xem hồ sơ",
  },
  {
    name: "Phạm Thu Hà",
    position: "Frontend Developer Intern",
    status: "Mời phỏng vấn",
  },
];

const statusClass = (status: string) => {
  switch (status) {
    case "Đang tuyển":
      return "bg-emerald-50 text-emerald-700";
    case "Nháp":
      return "bg-amber-50 text-amber-700";
    case "Mới ứng tuyển":
      return "bg-cyan-50 text-cyan-700";
    case "Đã xem hồ sơ":
      return "bg-blue-50 text-blue-700";
    case "Mời phỏng vấn":
      return "bg-violet-50 text-violet-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

const DashboardPage = () => {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white shadow-sm">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-medium text-cyan-100">Recruiter Dashboard</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight">
              Quản lý tuyển dụng hiệu quả hơn mỗi ngày
            </h2>
            <p className="mt-4 text-base leading-8 text-cyan-50/90">
              Theo dõi hiệu suất tuyển dụng, quản lý tin đăng, đánh giá hồ sơ ứng viên
              và tối ưu quy trình tuyển dụng trên một giao diện thống nhất.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/recruiter/post-job"
                className="inline-flex h-11 items-center rounded-2xl bg-white px-5 text-sm font-semibold text-cyan-700 shadow-sm"
              >
                Đăng tin mới
              </Link>
              <Link
                to="/recruiter/applications"
                className="inline-flex h-11 items-center rounded-2xl border border-white/30 bg-white/10 px-5 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Xem ứng viên
              </Link>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
            alt="Recruiter dashboard"
            className="h-full min-h-[260px] w-full object-cover"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">8</p>
          <p className="mt-2 text-sm text-slate-500">Tin đang hoạt động</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">126</p>
          <p className="mt-2 text-sm text-slate-500">Tổng hồ sơ ứng tuyển</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">14</p>
          <p className="mt-2 text-sm text-slate-500">Lịch phỏng vấn</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">42%</p>
          <p className="mt-2 text-sm text-slate-500">Tỷ lệ hồ sơ phù hợp</p>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-slate-900">Tin tuyển dụng gần đây</h3>
            <Link to="/recruiter/my-jobs" className="text-sm font-medium text-cyan-700">
              Xem tất cả
            </Link>
          </div>

          <div className="space-y-4">
            {recentJobs.map((job) => (
              <div
                key={job.id}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="mb-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass(
                          job.status
                        )}`}
                      >
                        {job.status}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{job.title}</h4>
                    <p className="mt-2 text-sm text-slate-500">
                      Đăng ngày {job.postedAt} • {job.applicants} ứng viên
                    </p>
                  </div>

                  <Link
                    to="/recruiter/my-jobs"
                    className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Quản lý
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-slate-900">Ứng viên mới</h3>
            <Link to="/recruiter/applications" className="text-sm font-medium text-cyan-700">
              Xem tất cả
            </Link>
          </div>

          <div className="space-y-4">
            {recentApplicants.map((item) => (
              <div
                key={`${item.name}-${item.position}`}
                className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-sm font-semibold text-cyan-700">
                    {item.name
                      .split(" ")
                      .slice(-2)
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.position}</p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;