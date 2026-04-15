import { Link } from "react-router-dom";

const applicants = [
  {
    id: 1,
    name: "Nguyễn Minh Anh",
    appliedJob: "Frontend Developer Intern",
    appliedAt: "08/04/2026",
    status: "Mới ứng tuyển",
    skills: ["React", "TypeScript", "Figma"],
  },
  {
    id: 2,
    name: "Trần Đức Long",
    appliedJob: "Java Spring Boot Fresher",
    appliedAt: "07/04/2026",
    status: "Đã xem hồ sơ",
    skills: ["Java", "Spring Boot", "MySQL"],
  },
  {
    id: 3,
    name: "Phạm Thu Hà",
    appliedJob: "Frontend Developer Intern",
    appliedAt: "06/04/2026",
    status: "Mời phỏng vấn",
    skills: ["React", "Tailwind", "UI/UX"],
  },
];

const statusClass = (status: string) => {
  switch (status) {
    case "Mới ứng tuyển":
      return "bg-cyan-50 text-cyan-700";
    case "Đã xem hồ sơ":
      return "bg-blue-50 text-blue-700";
    case "Mời phỏng vấn":
      return "bg-violet-50 text-violet-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

const ApplicationsPage = () => {
  return (
    <section className="space-y-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-cyan-700">Applications</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Quản lý ứng viên ứng tuyển
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Lọc, đánh giá và theo dõi ứng viên theo từng vị trí tuyển dụng để tối ưu
          quá trình tuyển chọn.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr_0.8fr_auto]">
          <input
            type="text"
            placeholder="Tìm theo tên ứng viên"
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
          />
          <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
            <option>Tất cả vị trí</option>
            <option>Frontend Developer Intern</option>
            <option>Java Spring Boot Fresher</option>
          </select>
          <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
            <option>Tất cả trạng thái</option>
            <option>Mới ứng tuyển</option>
            <option>Đã xem hồ sơ</option>
            <option>Mời phỏng vấn</option>
          </select>
          <button className="h-12 rounded-2xl border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            Lọc
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-sm font-semibold text-cyan-700">
                  {applicant.name
                    .split(" ")
                    .slice(-2)
                    .map((part) => part[0])
                    .join("")}
                </div>

                <div>
                  <div className="mb-2">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass(
                        applicant.status
                      )}`}
                    >
                      {applicant.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {applicant.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Ứng tuyển vị trí {applicant.appliedJob} • Ngày{" "}
                    {applicant.appliedAt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {applicant.skills.map((skill) => (
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

              <div className="flex flex-wrap gap-3">
                <Link
                  to={`/recruiter/applications/${applicant.id}`}
                  className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Xem hồ sơ
                </Link>
                <button className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Đặt lịch PV
                </button>
                <button className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm">
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationsPage;