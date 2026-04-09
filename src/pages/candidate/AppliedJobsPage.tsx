import { Link } from "react-router-dom";

const appliedJobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechVision Vietnam",
    date: "07/04/2026",
    status: "Đang xem xét",
  },
  {
    id: 2,
    title: "Java Spring Boot Fresher",
    company: "NextSoft",
    date: "05/04/2026",
    status: "Đã liên hệ",
  },
  {
    id: 3,
    title: "Backend Node.js Intern",
    company: "VN Digital Hub",
    date: "02/04/2026",
    status: "Từ chối",
  },
];

const statusClass = (status: string) => {
  switch (status) {
    case "Đang xem xét":
      return "bg-amber-50 text-amber-700";
    case "Đã liên hệ":
      return "bg-emerald-50 text-emerald-700";
    case "Từ chối":
      return "bg-rose-50 text-rose-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

const AppliedJobsPage = () => {
  return (
    <section className="space-y-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-cyan-700">Applied Jobs</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Những công việc đã ứng tuyển</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Theo dõi trạng thái đơn ứng tuyển và chuẩn bị tốt hơn cho các bước tiếp theo.
        </p>
      </div>

      <div className="grid gap-6">
        {appliedJobs.map((job) => (
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
                  {job.company} • Ứng tuyển ngày {job.date}
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  to={`/candidate/jobs/${job.id}`}
                  className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Xem lại tin
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppliedJobsPage;