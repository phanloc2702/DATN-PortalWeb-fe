import { Link, useParams } from "react-router-dom";

interface JobDetail {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  bannerImage: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  level: string;
  deadline: string;
  postedAt: string;
  description: string;
  requirements: string[];
  benefits: string[];
  skills: string[];
}

const jobMap: Record<number, JobDetail> = {
  1: {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechVision Vietnam",
    companyLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
    bannerImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    location: "Hà Nội",
    type: "Internship",
    salary: "3 - 6 triệu",
    experience: "Không yêu cầu",
    level: "Intern/Fresher",
    deadline: "30/04/2026",
    postedAt: "2 ngày trước",
    description:
      "Chúng tôi đang tìm kiếm Frontend Developer Intern có nền tảng React cơ bản, yêu thích xây dựng giao diện hiện đại và mong muốn được tiếp cận quy trình phát triển sản phẩm thực tế.",
    requirements: [
      "Có kiến thức cơ bản về HTML, CSS, JavaScript.",
      "Biết ReactJS hoặc đã từng làm project cá nhân với React.",
      "Có hiểu biết cơ bản về REST API.",
      "Tinh thần học hỏi tốt, chủ động và có trách nhiệm.",
    ],
    benefits: [
      "Được training trực tiếp trong môi trường làm việc thực tế.",
      "Có mentor hỗ trợ xuyên suốt quá trình thực tập.",
      "Cơ hội trở thành nhân viên chính thức sau kỳ thực tập.",
      "Môi trường trẻ, năng động, sử dụng công nghệ hiện đại.",
    ],
    skills: ["React", "TypeScript", "Tailwind", "REST API"],
  },
};

const JobDetailPage = () => {
  const { id } = useParams();
  const job = jobMap[Number(id)];

  if (!job) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">Không tìm thấy tin tuyển dụng</h1>
          <p className="mt-3 text-slate-500">Công việc này có thể đã bị xóa hoặc chưa tồn tại.</p>
          <Link
            to="/jobs"
            className="mt-6 inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white"
          >
            Quay lại danh sách việc làm
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
            to="/jobs"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-700"
          >
            ← Quay lại danh sách việc làm
          </Link>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <img
            src={job.bannerImage}
            alt={job.title}
            className="h-72 w-full object-cover"
          />

          <div className="p-8">
            <div className="-mt-20 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-5">
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="h-20 w-20 rounded-3xl border-4 border-white object-cover shadow-sm"
                />
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                      {job.type}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      {job.level}
                    </span>
                    <span className="text-xs text-slate-400">Đăng {job.postedAt}</span>
                  </div>

                  <h1 className="text-4xl font-bold text-slate-900">{job.title}</h1>

                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span>{job.company}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.salary}</span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 lg:w-[220px]">
                <Link
                  to="/login"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-md"
                >
                  Ứng tuyển ngay
                </Link>
                <button className="h-12 rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Lưu công việc
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.6fr_0.8fr]">
          <div className="space-y-8">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Mô tả công việc</h2>
              <p className="mt-4 leading-8 text-slate-600">{job.description}</p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Yêu cầu ứng viên</h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                {job.requirements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Quyền lợi</h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                {job.benefits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Thông tin chung</h3>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-slate-400">Mức lương</p>
                  <p className="mt-1 font-medium text-slate-900">{job.salary}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Kinh nghiệm</p>
                  <p className="mt-1 font-medium text-slate-900">{job.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Cấp bậc</p>
                  <p className="mt-1 font-medium text-slate-900">{job.level}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Địa điểm</p>
                  <p className="mt-1 font-medium text-slate-900">{job.location}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Hạn nộp hồ sơ</p>
                  <p className="mt-1 font-medium text-slate-900">{job.deadline}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Công ty tuyển dụng</h3>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="h-16 w-16 rounded-2xl border border-slate-200 object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">{job.company}</p>
                  <p className="text-sm text-slate-500">{job.location}</p>
                </div>
              </div>

              <Link
                to="/companies/1"
                className="mt-5 inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Xem công ty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetailPage;