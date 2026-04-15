import { Link, useParams } from "react-router-dom";

interface EditJobData {
  id: number;
  title: string;
  type: string;
  location: string;
  salary: string;
  experience: string;
  skills: string;
  description: string;
  requirements: string;
  benefits: string;
  deadline: string;
  status: string;
}

const jobsMap: Record<number, EditJobData> = {
  1: {
    id: 1,
    title: "Frontend Developer Intern",
    type: "Internship",
    location: "Hà Nội",
    salary: "3 - 6 triệu",
    experience: "Không yêu cầu",
    skills: "React, TypeScript, Tailwind",
    description:
      "Tìm kiếm Frontend Developer Intern có nền tảng React và mong muốn phát triển kỹ năng thực tế.",
    requirements:
      "Có kiến thức HTML, CSS, JavaScript. Biết React là lợi thế. Chủ động học hỏi.",
    benefits:
      "Có mentor hỗ trợ, môi trường trẻ, cơ hội lên chính thức sau thực tập.",
    deadline: "2026-04-30",
    status: "Đang tuyển",
  },
  2: {
    id: 2,
    title: "Java Spring Boot Fresher",
    type: "Full-time",
    location: "Hồ Chí Minh",
    salary: "8 - 12 triệu",
    experience: "Dưới 1 năm",
    skills: "Java, Spring Boot, MySQL",
    description:
      "Tuyển fresher backend tham gia phát triển các hệ thống API và quản trị doanh nghiệp.",
    requirements:
      "Biết Java core, OOP, Spring Boot cơ bản, làm việc được với MySQL/PostgreSQL.",
    benefits:
      "Thu nhập cạnh tranh, review code, cơ hội phát triển lên Junior Backend Developer.",
    deadline: "2026-05-05",
    status: "Đang tuyển",
  },
};

const EditJobPage = () => {
  const { id } = useParams();
  const job = jobsMap[Number(id)];

  if (!job) {
    return (
      <section className="space-y-6">
        <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">Không tìm thấy tin tuyển dụng</h2>
          <p className="mt-3 text-slate-500">Tin tuyển dụng này không tồn tại.</p>
          <Link
            to="/recruiter/my-jobs"
            className="mt-6 inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white"
          >
            Quay lại quản lý tin
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div>
        <Link
          to="/recruiter/my-jobs"
          className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-700"
        >
          ← Quay lại quản lý tin tuyển dụng
        </Link>
      </div>

      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-cyan-700">Edit Job Post</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Chỉnh sửa tin tuyển dụng</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Cập nhật nội dung JD, yêu cầu và quyền lợi để tối ưu khả năng thu hút ứng viên phù hợp.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Tiêu đề công việc</label>
              <input
                type="text"
                defaultValue={job.title}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Loại công việc</label>
              <select
                defaultValue={job.type}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              >
                <option>Internship</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Remote</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Địa điểm</label>
              <input
                type="text"
                defaultValue={job.location}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Mức lương</label>
              <input
                type="text"
                defaultValue={job.salary}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Kinh nghiệm</label>
              <input
                type="text"
                defaultValue={job.experience}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Kỹ năng yêu cầu</label>
              <input
                type="text"
                defaultValue={job.skills}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Mô tả công việc</label>
              <textarea
                rows={5}
                defaultValue={job.description}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Yêu cầu ứng viên</label>
              <textarea
                rows={5}
                defaultValue={job.requirements}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Quyền lợi</label>
              <textarea
                rows={5}
                defaultValue={job.benefits}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Cài đặt tin đăng</h3>

            <div className="mt-5 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Hạn nộp hồ sơ</label>
                <input
                  type="date"
                  defaultValue={job.deadline}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Trạng thái</label>
                <select
                  defaultValue={job.status}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
                >
                  <option>Đang tuyển</option>
                  <option>Nháp</option>
                  <option>Tạm ẩn</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <button className="inline-flex h-11 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-sm">
                Lưu thay đổi
              </button>
              <button className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Lưu nháp
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Gợi ý tối ưu</h3>
            <div className="mt-4 space-y-3">
              {[
                "Cập nhật JD rõ ràng để tăng tỷ lệ click.",
                "Kỹ năng cụ thể giúp lọc ứng viên tốt hơn.",
                "Quyền lợi rõ ràng tăng tỷ lệ ứng tuyển.",
              ].map((tip) => (
                <div key={tip} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  <p className="text-sm leading-7 text-slate-600">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;