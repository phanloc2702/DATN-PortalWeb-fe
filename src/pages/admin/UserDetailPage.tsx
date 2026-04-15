import { Link, useParams } from "react-router-dom";

interface UserDetail {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
  phone: string;
  location: string;
  bio: string;
  skills: string[];
  activities: string[];
}

const usersMap: Record<number, UserDetail> = {
  1: {
    id: 1,
    name: "Nguyễn Minh Anh",
    email: "minhanh@example.com",
    role: "CANDIDATE",
    status: "Hoạt động",
    createdAt: "2026-04-01",
    phone: "0988 123 456",
    location: "Hà Nội",
    bio: "Ứng viên định hướng Frontend Developer, có kinh nghiệm với React và TypeScript.",
    skills: ["React", "TypeScript", "Tailwind", "REST API"],
    activities: [
      "Đăng nhập lần cuối: 2026-04-14",
      "Đã ứng tuyển 6 công việc",
      "Đã lưu 12 công việc",
    ],
  },
  2: {
    id: 2,
    name: "TechVision Vietnam",
    email: "hr@techvision.vn",
    role: "RECRUITER",
    status: "Hoạt động",
    createdAt: "2026-03-20",
    phone: "024 1234 5678",
    location: "Hà Nội",
    bio: "Nhà tuyển dụng hoạt động trong lĩnh vực phần mềm và chuyển đổi số.",
    skills: ["Tuyển dụng", "HR", "Tech Hiring"],
    activities: [
      "Đăng 12 tin tuyển dụng",
      "Đã xem 126 hồ sơ ứng viên",
      "Cập nhật hồ sơ công ty ngày 2026-04-10",
    ],
  },
  3: {
    id: 3,
    name: "Phạm Thu Hà",
    email: "thuha@example.com",
    role: "CANDIDATE",
    status: "Tạm khóa",
    createdAt: "2026-02-11",
    phone: "0977 222 111",
    location: "Đà Nẵng",
    bio: "Ứng viên yêu thích UI/UX và frontend development.",
    skills: ["React", "Figma", "UI/UX"],
    activities: [
      "Tài khoản bị tạm khóa ngày 2026-04-09",
      "Đã ứng tuyển 3 công việc",
      "Có 1 báo cáo vi phạm nội dung hồ sơ",
    ],
  },
};

const badgeClass = (value: string) => {
  switch (value) {
    case "ADMIN":
      return "bg-violet-50 text-violet-700";
    case "RECRUITER":
      return "bg-blue-50 text-blue-700";
    case "CANDIDATE":
      return "bg-cyan-50 text-cyan-700";
    case "Hoạt động":
      return "bg-emerald-50 text-emerald-700";
    case "Tạm khóa":
      return "bg-rose-50 text-rose-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

const UserDetailPage = () => {
  const { id } = useParams();
  const user = usersMap[Number(id)];

  if (!user) {
    return (
      <section className="space-y-6">
        <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">Không tìm thấy người dùng</h2>
          <p className="mt-3 text-slate-500">Người dùng này không tồn tại.</p>
          <Link
            to="/admin/users"
            className="mt-6 inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white"
          >
            Quay lại danh sách người dùng
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div>
        <Link
          to="/admin/users"
          className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-700"
        >
          ← Quay lại quản lý người dùng
        </Link>
      </div>

      <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-cyan-100 text-3xl font-bold text-cyan-700">
              {user.name
                .split(" ")
                .slice(-2)
                .map((part) => part[0])
                .join("")}
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClass(user.role)}`}>
                {user.role}
              </span>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClass(user.status)}`}>
                {user.status}
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">{user.name}</h2>
            <p className="mt-2 text-sm text-slate-500">{user.email}</p>

            <div className="mt-8 w-full space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left">
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-1 font-medium text-slate-900">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Số điện thoại</p>
                <p className="mt-1 font-medium text-slate-900">{user.phone}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Địa điểm</p>
                <p className="mt-1 font-medium text-slate-900">{user.location}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Ngày tạo tài khoản</p>
                <p className="mt-1 font-medium text-slate-900">{user.createdAt}</p>
              </div>
            </div>

            <div className="mt-6 grid w-full gap-3">
              <button className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Chỉnh sửa thông tin
              </button>
              <button className="inline-flex h-11 items-center justify-center rounded-2xl bg-rose-50 text-sm font-semibold text-rose-700">
                Khóa tài khoản
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Mô tả / Giới thiệu</h3>
            <p className="mt-4 leading-8 text-slate-600">{user.bio}</p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Kỹ năng / Nhãn</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Hoạt động gần đây</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {user.activities.map((item) => (
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

export default UserDetailPage;