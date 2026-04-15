import { Link } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Nguyễn Minh Anh",
    email: "minhanh@example.com",
    role: "CANDIDATE",
    status: "Hoạt động",
  },
  {
    id: 2,
    name: "TechVision Vietnam",
    email: "hr@techvision.vn",
    role: "RECRUITER",
    status: "Hoạt động",
  },
  {
    id: 3,
    name: "Phạm Thu Hà",
    email: "thuha@example.com",
    role: "CANDIDATE",
    status: "Tạm khóa",
  },
];

const roleClass = (role: string) => {
  switch (role) {
    case "ADMIN":
      return "bg-violet-50 text-violet-700";
    case "RECRUITER":
      return "bg-blue-50 text-blue-700";
    case "CANDIDATE":
      return "bg-cyan-50 text-cyan-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

const statusClass = (status: string) => {
  switch (status) {
    case "Hoạt động":
      return "bg-emerald-50 text-emerald-700";
    case "Tạm khóa":
      return "bg-rose-50 text-rose-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

const UserManagementPage = () => {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-700">User Management</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Quản lý người dùng</h2>
          <p className="mt-3 text-base leading-8 text-slate-600">
            Theo dõi, lọc và kiểm soát tài khoản ứng viên, nhà tuyển dụng và quản trị viên.
          </p>
        </div>

        <button className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm">
          Tạo tài khoản admin
        </button>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_auto]">
          <input
            type="text"
            placeholder="Tìm theo tên hoặc email"
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
          />
          <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
            <option>Tất cả vai trò</option>
            <option>CANDIDATE</option>
            <option>RECRUITER</option>
            <option>ADMIN</option>
          </select>
          <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
            <option>Tất cả trạng thái</option>
            <option>Hoạt động</option>
            <option>Tạm khóa</option>
          </select>
          <button className="h-12 rounded-2xl border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            Lọc
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3 flex flex-wrap gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${roleClass(
                      user.role
                    )}`}
                  >
                    {user.role}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{user.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{user.email}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to={`/admin/users/${user.id}`}
                  className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Xem chi tiết
                </Link>
                <button className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Chỉnh sửa
                </button>
                <button className="inline-flex h-11 items-center rounded-2xl bg-rose-50 px-5 text-sm font-semibold text-rose-700">
                  Khóa tài khoản
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserManagementPage;