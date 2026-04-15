const companies = [
  {
    id: 1,
    name: "TechVision Vietnam",
    status: "Đã xác minh",
    jobs: 12,
    industry: "Phần mềm / Công nghệ",
  },
  {
    id: 2,
    name: "NextSoft",
    status: "Chờ xác minh",
    jobs: 8,
    industry: "Software Development",
  },
  {
    id: 3,
    name: "SmartHire",
    status: "Tạm ẩn",
    jobs: 5,
    industry: "HR Tech",
  },
];

const statusClass = (status: string) => {
  switch (status) {
    case "Đã xác minh":
      return "bg-emerald-50 text-emerald-700";
    case "Chờ xác minh":
      return "bg-amber-50 text-amber-700";
    case "Tạm ẩn":
      return "bg-rose-50 text-rose-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

const CompanyManagementPage = () => {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-medium text-cyan-700">Company Management</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Quản lý công ty</h2>
        <p className="mt-3 text-base leading-8 text-slate-600">
          Quản trị doanh nghiệp trên nền tảng, kiểm duyệt hồ sơ và giám sát hoạt động tuyển dụng.
        </p>
      </div>

      <div className="space-y-4">
        {companies.map((company) => (
          <div
            key={company.id}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass(
                      company.status
                    )}`}
                  >
                    {company.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{company.name}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  {company.industry} • {company.jobs} việc làm
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="inline-flex h-11 items-center rounded-2xl bg-emerald-50 px-5 text-sm font-semibold text-emerald-700">
                  Xác minh
                </button>
                <button className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Xem hồ sơ
                </button>
                <button className="inline-flex h-11 items-center rounded-2xl bg-rose-50 px-5 text-sm font-semibold text-rose-700">
                  Tạm ẩn
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyManagementPage;