import { Link } from "react-router-dom";

interface JobItem {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  jobImage: string;
  location: string;
  type: string;
  salary: string;
  tags: string[];
  postedAt: string;
  featured?: boolean;
}

const jobs: JobItem[] = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechVision Vietnam",
    companyLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
    jobImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    location: "Hà Nội",
    type: "Internship",
    salary: "3 - 6 triệu",
    tags: ["React", "TypeScript", "Tailwind"],
    postedAt: "2 ngày trước",
    featured: true,
  },
  {
    id: 2,
    title: "Java Spring Boot Fresher",
    company: "NextSoft",
    companyLogo:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80",
    jobImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    location: "Hồ Chí Minh",
    type: "Full-time",
    salary: "8 - 12 triệu",
    tags: ["Java", "Spring Boot", "MySQL"],
    postedAt: "1 ngày trước",
  },
  {
    id: 3,
    title: "Backend Node.js Intern",
    company: "VN Digital Hub",
    companyLogo:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80",
    jobImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    location: "Hà Nội",
    type: "Internship",
    salary: "4 - 7 triệu",
    tags: ["Node.js", "Express", "PostgreSQL"],
    postedAt: "3 ngày trước",
  },
  {
    id: 4,
    title: "Fullstack Developer",
    company: "TalentBridge",
    companyLogo:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=200&q=80",
    jobImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    location: "Hybrid",
    type: "Full-time",
    salary: "12 - 18 triệu",
    tags: ["React", "Spring Boot", "Docker"],
    postedAt: "Hôm nay",
    featured: true,
  },
];

const JobListPage = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm text-cyan-700">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
            Danh sách việc làm nổi bật
          </div>

          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Khám phá những{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              cơ hội nghề nghiệp
            </span>{" "}
            phù hợp với bạn
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Tìm kiếm công việc theo kỹ năng, địa điểm, mức lương và loại hình làm
            việc trên nền tảng tuyển dụng hiện đại.
          </p>
        </div>

        <div className="mb-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-4">
            <input
              type="text"
              placeholder="Tìm theo vị trí công việc"
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
              <option>Part-time</option>
              <option>Remote</option>
            </select>
            <button className="h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-md transition hover:scale-[1.01] active:scale-[0.99]">
              Tìm kiếm việc làm
            </button>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Hiển thị <span className="font-semibold text-slate-900">{jobs.length}</span> việc làm
          </p>

          <select className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none">
            <option>Mới nhất</option>
            <option>Lương cao nhất</option>
            <option>Phù hợp nhất</option>
          </select>
        </div>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
            >
              <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
                <div className="relative min-h-[220px]">
                  <img
                    src={job.jobImage}
                    alt={job.title}
                    className="h-full w-full object-cover"
                  />
                  {job.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-cyan-700 shadow-sm">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="mb-4 flex items-center gap-4">
                        <img
                          src={job.companyLogo}
                          alt={job.company}
                          className="h-14 w-14 rounded-2xl border border-slate-200 object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-slate-500">{job.company}</p>
                          <span className="mt-1 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                            {job.type}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900">{job.title}</h3>

                      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.salary}</span>
                        <span>•</span>
                        <span>{job.postedAt}</span>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link
                        to={`/jobs/${job.id}`}
                        className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                      >
                        Xem chi tiết
                      </Link>
                      <Link
                        to="/login"
                        className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.01] active:scale-[0.99]"
                      >
                        Ứng tuyển
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListPage;