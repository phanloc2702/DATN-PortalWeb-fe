import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechVision Vietnam",
    status: "Chờ duyệt",
    applicants: 24,
  },
  {
    id: 2,
    title: "Java Spring Boot Fresher",
    company: "NextSoft",
    status: "Đang hiển thị",
    applicants: 18,
  },
  {
    id: 3,
    title: "QA Tester Intern",
    company: "SmartHire",
    status: "Bị ẩn",
    applicants: 2,
  },
];

const statusClass = (status: string) => {
  switch (status) {
    case "Chờ duyệt":
      return "bg-amber-50 text-amber-700";
    case "Đang hiển thị":
      return "bg-emerald-50 text-emerald-700";
    case "Bị ẩn":
      return "bg-rose-50 text-rose-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

const JobManagementPage = () => {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-medium text-cyan-700">Job Management</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Quản lý việc làm</h2>
        <p className="mt-3 text-base leading-8 text-slate-600">
          Kiểm duyệt, ẩn/hiện và theo dõi hiệu quả các tin tuyển dụng trên nền tảng.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_auto]">
          <input
            type="text"
            placeholder="Tìm theo tiêu đề hoặc công ty"
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
          />
          <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
            <option>Tất cả trạng thái</option>
            <option>Chờ duyệt</option>
            <option>Đang hiển thị</option>
            <option>Bị ẩn</option>
          </select>
          <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
            <option>Sắp xếp</option>
            <option>Mới nhất</option>
            <option>Nhiều ứng viên</option>
          </select>
          <button className="h-12 rounded-2xl border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            Lọc
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass(
                      job.status
                    )}`}
                  >
                    {job.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  {job.company} • {job.applicants} ứng viên
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="inline-flex h-11 items-center rounded-2xl bg-emerald-50 px-5 text-sm font-semibold text-emerald-700">
                  Duyệt
                </button>
                <Link
                  to={`/admin/jobs/${job.id}`}
                  className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Xem chi tiết
                </Link>
                <button className="inline-flex h-11 items-center rounded-2xl bg-rose-50 px-5 text-sm font-semibold text-rose-700">
                  Ẩn tin
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobManagementPage;