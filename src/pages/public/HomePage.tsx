import { Link } from "react-router-dom";

const featuredJobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechVision Vietnam",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
    location: "Hà Nội",
    salary: "3 - 6 triệu",
    type: "Internship",
  },
  {
    id: 2,
    title: "Java Spring Boot Fresher",
    company: "NextSoft",
    logo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80",
    location: "Hồ Chí Minh",
    salary: "8 - 12 triệu",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Backend Node.js Intern",
    company: "VN Digital Hub",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80",
    location: "Hà Nội",
    salary: "4 - 7 triệu",
    type: "Internship",
  },
];

const featuredCompanies = [
  {
    id: 1,
    name: "TechVision Vietnam",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
    cover: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    industry: "Phần mềm / Công nghệ",
    jobsCount: 12,
  },
  {
    id: 2,
    name: "NextSoft",
    logo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80",
    cover: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    industry: "Software Development",
    jobsCount: 8,
  },
  {
    id: 3,
    name: "SmartHire",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80",
    cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    industry: "HR Tech",
    jobsCount: 5,
  },
];

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "UI/UX Designer",
  "QA / Tester",
  "Business Analyst",
];

const HomePage = () => {
  return (
    <section className="space-y-12 pb-6">
      <div className="grid items-center gap-8 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_35%)]" />

          <div className="relative z-10 max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm text-cyan-700">
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
              Nền tảng tuyển dụng hiện đại cho ứng viên và doanh nghiệp
            </div>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Tìm việc nhanh hơn,{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                tuyển dụng thông minh hơn
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Job Portal giúp ứng viên khám phá cơ hội nghề nghiệp phù hợp và hỗ trợ
              doanh nghiệp tiếp cận nguồn nhân lực chất lượng với trải nghiệm trực quan,
              hiện đại và dễ sử dụng.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/jobs"
                className="inline-flex h-12 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.01]"
              >
                Khám phá việc làm
              </Link>
              <Link
                to="/register"
                className="inline-flex h-12 items-center rounded-2xl border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Tạo tài khoản ngay
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-bold text-slate-900">10K+</p>
                <p className="mt-1 text-sm text-slate-500">Ứng viên</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="mt-1 text-sm text-slate-500">Doanh nghiệp</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-bold text-slate-900">2K+</p>
                <p className="mt-1 text-sm text-slate-500">Việc làm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
            alt="Recruitment workspace"
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>
      </div>

      <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_auto]">
          <input
            type="text"
            placeholder="Tìm theo vị trí, kỹ năng, công ty..."
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
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">10K+</p>
          <p className="mt-2 text-sm text-slate-500">Ứng viên đang hoạt động</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">500+</p>
          <p className="mt-2 text-sm text-slate-500">Doanh nghiệp tuyển dụng</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">2K+</p>
          <p className="mt-2 text-sm text-slate-500">Việc làm đang mở</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-slate-900">24/7</p>
          <p className="mt-2 text-sm text-slate-500">Hỗ trợ nền tảng</p>
        </div>
      </div>

      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-cyan-700">Danh mục phổ biến</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Ngành nghề nổi bật</h2>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-300 hover:bg-white"
            >
              <h3 className="text-lg font-semibold text-slate-900">{category}</h3>
              <p className="mt-2 text-sm text-slate-500">
                Khám phá cơ hội nghề nghiệp phù hợp với kỹ năng của bạn.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-cyan-700">Featured Jobs</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Việc làm nổi bật</h2>
          </div>
          <Link to="/jobs" className="text-sm font-medium text-cyan-700">
            Xem tất cả
          </Link>
        </div>

        <div className="grid gap-6">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="h-16 w-16 rounded-2xl border border-slate-200 object-cover"
                  />
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">
                      {job.company} • {job.location} • {job.salary}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    to={`/jobs/${job.id}`}
                    className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Chi tiết
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm"
                  >
                    Ứng tuyển
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-cyan-700">Top Companies</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Doanh nghiệp nổi bật</h2>
          </div>
          <Link to="/companies" className="text-sm font-medium text-cyan-700">
            Xem tất cả
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredCompanies.map((company) => (
            <div
              key={company.id}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
            >
              <img
                src={company.cover}
                alt={company.name}
                className="h-40 w-full object-cover"
              />

              <div className="p-6">
                <div className="-mt-12 mb-4 flex items-end gap-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-16 w-16 rounded-2xl border-4 border-white object-cover shadow-sm"
                  />
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                    {company.jobsCount} việc làm
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{company.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{company.industry}</p>

                <div className="mt-5">
                  <Link
                    to={`/companies/${company.id}`}
                    className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Xem công ty
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
            1
          </div>
          <h3 className="text-xl font-bold text-slate-900">Tạo hồ sơ cá nhân</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Cập nhật thông tin, kỹ năng, kinh nghiệm và CV để tăng độ tin cậy với nhà tuyển dụng.
          </p>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
            2
          </div>
          <h3 className="text-xl font-bold text-slate-900">Khám phá việc làm phù hợp</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Tìm kiếm theo kỹ năng, địa điểm và loại công việc để tiếp cận cơ hội phù hợp.
          </p>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
            3
          </div>
          <h3 className="text-xl font-bold text-slate-900">Ứng tuyển và theo dõi</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Gửi hồ sơ nhanh chóng và quản lý trạng thái ứng tuyển ngay trên hệ thống.
          </p>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
            alt="Users testimonial"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-cyan-700">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Người dùng nói gì về nền tảng</h2>

          <div className="mt-6 space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm leading-7 text-slate-600">
                “Giao diện trực quan, dễ dùng và rất phù hợp để tìm kiếm cơ hội thực tập cho sinh viên năm cuối.”
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">Nguyễn Minh Anh • Candidate</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm leading-7 text-slate-600">
                “Việc đăng tin tuyển dụng và tiếp cận hồ sơ ứng viên trở nên nhanh hơn, trực quan hơn.”
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">Lê Tuấn Hưng • Recruiter</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-cyan-700">Get Started</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Bắt đầu hành trình nghề nghiệp của bạn ngay hôm nay
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Tạo tài khoản ứng viên hoặc nhà tuyển dụng để trải nghiệm đầy đủ các tính năng của hệ thống.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/register"
              className="inline-flex h-12 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-sm font-semibold text-white shadow-sm"
            >
              Tạo tài khoản
            </Link>
            <Link
              to="/jobs"
              className="inline-flex h-12 items-center rounded-2xl border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Xem việc làm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;