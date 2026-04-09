import { Link } from "react-router-dom";

const recommendedJobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechVision Vietnam",
    location: "Hà Nội",
    salary: "3 - 6 triệu",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Java Spring Boot Fresher",
    company: "NextSoft",
    location: "Hồ Chí Minh",
    salary: "8 - 12 triệu",
    tags: ["Java", "Spring Boot", "MySQL"],
  },
  {
    id: 3,
    title: "Backend Node.js Intern",
    company: "VN Digital Hub",
    location: "Hà Nội",
    salary: "4 - 7 triệu",
    tags: ["Node.js", "Express", "PostgreSQL"],
  },
];

const DashboardPage = () => {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white shadow-sm">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-medium text-cyan-100">Candidate Home</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight">
              Tìm việc nhanh hơn với hồ sơ phù hợp và gợi ý thông minh
            </h2>
            <p className="mt-4 text-base leading-8 text-cyan-50/90">
              Khám phá công việc phù hợp với kỹ năng của bạn, lưu tin tuyển dụng,
              theo dõi trạng thái ứng tuyển và tối ưu CV ngay trên một nền tảng duy nhất.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/candidate/jobs"
                className="inline-flex h-11 items-center rounded-2xl bg-white px-5 text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-cyan-50"
              >
                Tìm việc ngay
              </Link>
              <Link
                to="/candidate/cv"
                className="inline-flex h-11 items-center rounded-2xl border border-white/30 bg-white/10 px-5 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Cập nhật CV
              </Link>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Candidate banner"
            className="h-full min-h-[260px] w-full object-cover"
          />
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_auto]">
          <input
            type="text"
            placeholder="Tìm kiếm theo vị trí, công nghệ, công ty..."
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          />
          <input
            type="text"
            placeholder="Địa điểm"
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          />
          <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20">
            <option>Loại công việc</option>
            <option>Internship</option>
            <option>Full-time</option>
            <option>Remote</option>
          </select>
          <button className="h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.01]">
            Tìm kiếm
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">12</p>
          <p className="mt-2 text-sm text-slate-500">Việc đã lưu</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">6</p>
          <p className="mt-2 text-sm text-slate-500">Đã ứng tuyển</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">3</p>
          <p className="mt-2 text-sm text-slate-500">Lịch phỏng vấn</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">85%</p>
          <p className="mt-2 text-sm text-slate-500">Mức hoàn thiện hồ sơ</p>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-slate-900">Việc làm dành cho bạn</h3>
            <Link to="/candidate/jobs" className="text-sm font-medium text-cyan-700">
              Xem tất cả
            </Link>
          </div>

          <div className="space-y-4">
            {recommendedJobs.map((job) => (
              <div
                key={job.id}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-300 hover:bg-white"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{job.title}</h4>
                    <p className="mt-2 text-sm text-slate-500">
                      {job.company} • {job.location} • {job.salary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80"
              alt="Workspace"
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">Mẹo tăng cơ hội ứng tuyển</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Cập nhật hồ sơ, thêm project nổi bật và tối ưu CV theo vị trí ứng tuyển
                để tăng khả năng được nhà tuyển dụng quan tâm.
              </p>
              <Link
                to="/candidate/profile"
                className="mt-5 inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Hoàn thiện hồ sơ
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Hoạt động gần đây</h3>

            <div className="mt-4 space-y-4">
              {[
                "Bạn đã lưu công việc Frontend Developer Intern.",
                "CV của bạn vừa được cập nhật.",
                "Nhà tuyển dụng xem hồ sơ của bạn 2 giờ trước.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;