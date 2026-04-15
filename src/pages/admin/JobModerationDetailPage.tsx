import { Link, useParams } from "react-router-dom";

interface JobModerationDetail {
  id: number;
  title: string;
  company: string;
  status: string;
  type: string;
  location: string;
  salary: string;
  postedAt: string;
  description: string;
  requirements: string[];
  benefits: string[];
  flags: string[];
}

const jobsMap: Record<number, JobModerationDetail> = {
  1: {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechVision Vietnam",
    status: "Chờ duyệt",
    type: "Internship",
    location: "Hà Nội",
    salary: "3 - 6 triệu",
    postedAt: "2026-04-08",
    description:
      "Tuyển thực tập sinh frontend tham gia phát triển giao diện web với React và Tailwind.",
    requirements: [
      "Biết HTML, CSS, JavaScript.",
      "Có kiến thức React cơ bản.",
      "Có tinh thần học hỏi.",
    ],
    benefits: [
      "Có mentor hướng dẫn.",
      "Môi trường trẻ, năng động.",
      "Cơ hội trở thành nhân viên chính thức.",
    ],
    flags: [
      "Tiêu đề hợp lệ",
      "Mô tả rõ ràng",
      "Chưa phát hiện nội dung vi phạm",
    ],
  },
  2: {
    id: 2,
    title: "Java Spring Boot Fresher",
    company: "NextSoft",
    status: "Đang hiển thị",
    type: "Full-time",
    location: "Hồ Chí Minh",
    salary: "8 - 12 triệu",
    postedAt: "2026-04-06",
    description:
      "Tuyển fresher backend phát triển API và hệ thống quản lý doanh nghiệp.",
    requirements: [
      "Biết Java core, OOP.",
      "Có kiến thức Spring Boot.",
      "Làm việc được với MySQL.",
    ],
    benefits: [
      "Review code thường xuyên.",
      "Lộ trình phát triển rõ ràng.",
      "Thu nhập cạnh tranh.",
    ],
    flags: [
      "Tin đã được duyệt trước đó",
      "Nội dung phù hợp",
      "Công ty đã xác minh",
    ],
  },
};

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

const JobModerationDetailPage = () => {
  const { id } = useParams();
  const job = jobsMap[Number(id)];

  if (!job) {
    return (
      <section className="space-y-6">
        <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">Không tìm thấy tin tuyển dụng</h2>
          <p className="mt-3 text-slate-500">Tin này không tồn tại.</p>
          <Link
            to="/admin/jobs"
            className="mt-6 inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white"
          >
            Quay lại quản lý việc làm
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div>
        <Link
          to="/admin/jobs"
          className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-700"
        >
          ← Quay lại quản lý việc làm
        </Link>
      </div>

      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-3">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass(job.status)}`}>
                {job.status}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">{job.title}</h2>
            <p className="mt-3 text-sm text-slate-500">
              {job.company} • {job.type} • {job.location} • {job.salary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="inline-flex h-11 items-center rounded-2xl bg-emerald-50 px-5 text-sm font-semibold text-emerald-700">
              Duyệt tin
            </button>
            <button className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              Yêu cầu chỉnh sửa
            </button>
            <button className="inline-flex h-11 items-center rounded-2xl bg-rose-50 px-5 text-sm font-semibold text-rose-700">
              Ẩn tin
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Mô tả công việc</h3>
            <p className="mt-4 leading-8 text-slate-600">{job.description}</p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Yêu cầu ứng viên</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {job.requirements.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Quyền lợi</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {job.benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Thông tin kiểm duyệt</h3>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-sm text-slate-400">Ngày đăng</p>
                <p className="mt-1 font-medium text-slate-900">{job.postedAt}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Trạng thái</p>
                <p className="mt-1 font-medium text-slate-900">{job.status}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Doanh nghiệp</p>
                <p className="mt-1 font-medium text-slate-900">{job.company}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Nhận định hệ thống</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {job.flags.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobModerationDetailPage;