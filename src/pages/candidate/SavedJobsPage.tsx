import { Link } from "react-router-dom";

const savedJobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechVision Vietnam",
    location: "Hà Nội",
    salary: "3 - 6 triệu",
    match: "Phù hợp 92%",
  },
  {
    id: 2,
    title: "Fullstack Developer",
    company: "TalentBridge",
    location: "Hybrid",
    salary: "12 - 18 triệu",
    match: "Phù hợp 87%",
  },
  {
    id: 3,
    title: "QA Tester Intern",
    company: "SmartHire",
    location: "Remote",
    salary: "3 - 5 triệu",
    match: "Phù hợp 81%",
  },
];

const SavedJobsPage = () => {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-cyan-700">Saved Jobs</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Những công việc bạn đã lưu</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Quản lý các vị trí bạn quan tâm, so sánh nhanh và ứng tuyển đúng thời điểm.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/candidate/jobs"
              className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm"
            >
              Tìm thêm việc làm
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
            alt="Saved jobs"
            className="h-full min-h-[230px] w-full object-cover"
          />
        </div>
      </div>

      <div className="grid gap-6">
        {savedJobs.map((job) => (
          <div
            key={job.id}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-300 hover:shadow-md"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                    {job.match}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  {job.company} • {job.location} • {job.salary}
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  to={`/candidate/jobs/${job.id}`}
                  className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Chi tiết
                </Link>
                <button className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm">
                  Ứng tuyển
                </button>
                <button className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Bỏ lưu
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavedJobsPage;