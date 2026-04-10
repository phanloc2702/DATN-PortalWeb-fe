import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    status: "Đang tuyển",
    applicants: 24,
    views: 312,
    updatedAt: "08/04/2026",
  },
  {
    id: 2,
    title: "Java Spring Boot Fresher",
    status: "Đang tuyển",
    applicants: 18,
    views: 254,
    updatedAt: "06/04/2026",
  },
  {
    id: 3,
    title: "QA Tester Intern",
    status: "Nháp",
    applicants: 0,
    views: 0,
    updatedAt: "05/04/2026",
  },
];

const statusClass = (status: string) => {
  switch (status) {
    case "Đang tuyển":
      return "bg-emerald-50 text-emerald-700";
    case "Nháp":
      return "bg-amber-50 text-amber-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

const MyJobsPage = () => {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-700">My Job Posts</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Quản lý tin tuyển dụng</h2>
          <p className="mt-3 text-base leading-8 text-slate-600">
            Theo dõi trạng thái tin tuyển dụng, số lượng ứng viên và hiệu quả hiển thị.
          </p>
        </div>

        <Link
          to="/recruiter/post-job"
          className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm"
        >
          Đăng tin mới
        </Link>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_auto]">
          <input
            type="text"
            placeholder="Tìm theo tiêu đề công việc"
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
          />
          <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
            <option>Tất cả trạng thái</option>
            <option>Đang tuyển</option>
            <option>Nháp</option>
          </select>
          <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
            <option>Sắp xếp</option>
            <option>Mới nhất</option>
            <option>Nhiều ứng viên nhất</option>
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
                  {job.applicants} ứng viên • {job.views} lượt xem • Cập nhật {job.updatedAt}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Chỉnh sửa
                </button>
                <Link
                  to="/recruiter/applications"
                  className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm"
                >
                  Xem ứng viên
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyJobsPage;