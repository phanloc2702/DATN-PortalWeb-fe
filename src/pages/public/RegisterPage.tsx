import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/shared/AuthLayout";

type RoleType = "CANDIDATE" | "RECRUITER";

interface RegisterForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: RoleType;
}

const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<RegisterForm>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "CANDIDATE",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp");
      return;
    }

    console.log("Register form:", form);

    // Sau này nối API ở đây
    // await registerApi(form)

    navigate("/login");
  };

  return (
    <AuthLayout
      title="Tạo tài khoản"
      subtitle="Đăng ký để bắt đầu hành trình tìm việc hoặc tuyển dụng trên hệ thống Job Portal."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Họ và tên
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Nhập họ và tên"
            value={form.fullName}
            onChange={handleChange}
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Nhập email"
            value={form.email}
            onChange={handleChange}
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Vai trò
          </label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          >
            <option value="CANDIDATE">Ứng viên</option>
            <option value="RECRUITER">Nhà tuyển dụng</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Mật khẩu
          </label>
          <input
            type="password"
            name="password"
            placeholder="Nhập mật khẩu"
            value={form.password}
            onChange={handleChange}
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Xác nhận mật khẩu
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            value={form.confirmPassword}
            onChange={handleChange}
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />
        </div>

        <button
          type="submit"
          className="h-12 w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.01] hover:from-fuchsia-400 hover:to-violet-500 active:scale-[0.99]"
        >
          Tạo tài khoản
        </button>

        <p className="pt-2 text-center text-sm text-slate-400">
          Đã có tài khoản?{" "}
          <Link
            to="/login"
            className="font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Đăng nhập
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;