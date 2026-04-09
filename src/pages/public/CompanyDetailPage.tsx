import { Link, useParams } from "react-router-dom";

interface CompanyDetail {
  id: number;
  name: string;
  logo: string;
  coverImage: string;
  industry: string;
  location: string;
  size: string;
  website: string;
  jobsCount: number;
  description: string;
  benefits: string[];
  techStacks: string[];
}

const companyMap: Record<number, CompanyDetail> = {
  1: {
    id: 1,
    name: "TechVision Vietnam",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    industry: "Phần mềm / Công nghệ",
    location: "Hà Nội",
    size: "100 - 300 nhân sự",
    website: "www.techvision.vn",
    jobsCount: 12,
    description:
      "TechVision Vietnam là doanh nghiệp công nghệ tập trung phát triển các giải pháp phần mềm hiện đại cho doanh nghiệp, với định hướng xây dựng sản phẩm bền vững, giao diện trực quan và trải nghiệm người dùng tối ưu.",
    benefits: [
      "Môi trường làm việc trẻ, năng động.",
      "Có lộ trình đào tạo cho intern/fresher.",
      "Review hiệu suất và cơ hội lên chính thức.",
      "Làm việc với đội ngũ kỹ thuật có kinh nghiệm.",
    ],
    techStacks: ["React", "TypeScript", "Java", "Spring Boot", "Docker"],
  },
};

const CompanyDetailPage = () => {
  const { id } = useParams();
  const company = companyMap[Number(id)];

  if (!company) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">Không tìm thấy công ty</h1>
          <p className="mt-3 text-slate-500">Công ty này có thể đã bị xóa hoặc chưa tồn tại.</p>
          <Link
            to="/companies"
            className="mt-6 inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white"
          >
            Quay lại danh sách công ty
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-6">
          <Link
            to="/companies"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-700"
          >
            ← Quay lại danh sách công ty
          </Link>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <img
            src={company.coverImage}
            alt={company.name}
            className="h-72 w-full object-cover"
          />

          <div className="p-8">
            <div className="-mt-20 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-5">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-20 w-20 rounded-3xl border-4 border-white object-cover shadow-sm"
                />
                <div>
                  <h1 className="text-4xl font-bold text-slate-900">{company.name}</h1>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span>{company.industry}</span>
                    <span>•</span>
                    <span>{company.location}</span>
                    <span>•</span>
                    <span>{company.size}</span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {company.techStacks.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 lg:w-[230px]">
                <Link
                  to="/jobs"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-md"
                >
                  Xem việc làm đang tuyển
                </Link>
                <button className="h-12 rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Theo dõi công ty
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.6fr_0.8fr]">
          <div className="space-y-8">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Giới thiệu công ty</h2>
              <p className="mt-4 leading-8 text-slate-600">{company.description}</p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Điểm nổi bật</h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                {company.benefits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Thông tin công ty</h3>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-slate-400">Lĩnh vực</p>
                  <p className="mt-1 font-medium text-slate-900">{company.industry}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Địa điểm</p>
                  <p className="mt-1 font-medium text-slate-900">{company.location}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Quy mô</p>
                  <p className="mt-1 font-medium text-slate-900">{company.size}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Website</p>
                  <p className="mt-1 font-medium text-cyan-700">{company.website}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Việc làm đang mở</p>
                  <p className="mt-1 font-medium text-slate-900">{company.jobsCount}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Công nghệ sử dụng</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {company.techStacks.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                to="/jobs"
                className="mt-5 inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Khám phá việc làm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetailPage;