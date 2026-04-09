import { Link } from "react-router-dom";

interface CompanyItem {
  id: number;
  name: string;
  logo: string;
  coverImage: string;
  industry: string;
  location: string;
  jobsCount: number;
  description: string;
  tags: string[];
}

const companies: CompanyItem[] = [
  {
    id: 1,
    name: "TechVision Vietnam",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    industry: "Phần mềm / Công nghệ",
    location: "Hà Nội",
    jobsCount: 12,
    description:
      "Doanh nghiệp công nghệ tập trung vào giải pháp web, mobile và chuyển đổi số cho doanh nghiệp.",
    tags: ["React", "Java", "Cloud"],
  },
  {
    id: 2,
    name: "NextSoft",
    logo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    industry: "Software Development",
    location: "Hồ Chí Minh",
    jobsCount: 8,
    description:
      "Môi trường năng động dành cho fresher và intern, hỗ trợ phát triển kỹ năng fullstack thực tế.",
    tags: ["Spring Boot", "Node.js", "Agile"],
  },
  {
    id: 3,
    name: "SmartHire",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    industry: "HR Tech",
    location: "Remote",
    jobsCount: 5,
    description:
      "Công ty phát triển nền tảng tuyển dụng hiện đại, tối ưu trải nghiệm ứng viên và nhà tuyển dụng.",
    tags: ["Recruitment", "SaaS", "Product"],
  },
];

const CompanyListPage = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700">
            <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            Doanh nghiệp tuyển dụng nổi bật
          </div>

          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Tìm hiểu những{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              công ty phù hợp
            </span>{" "}
            với định hướng của bạn
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Khám phá doanh nghiệp, môi trường làm việc và các vị trí đang tuyển trên hệ thống.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {companies.map((company) => (
            <div
              key={company.id}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
            >
              <img
                src={company.coverImage}
                alt={company.name}
                className="h-44 w-full object-cover"
              />

              <div className="p-6">
                <div className="-mt-14 mb-4 flex items-end gap-4">
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

                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                  <span>{company.industry}</span>
                  <span>•</span>
                  <span>{company.location}</span>
                </div>

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                  {company.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {company.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    to={`/companies/${company.id}`}
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Xem chi tiết
                  </Link>
                  <Link
                    to="/jobs"
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 text-sm font-semibold text-white shadow-md transition hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Xem việc làm
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyListPage;