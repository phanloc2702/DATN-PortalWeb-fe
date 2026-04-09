import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/shared/AuthLayout";

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Login form:", form);

    // Sau này nối API ở đây
    // const response = await loginApi(form)
    // navigate("/redirect-by-role")

    navigate("/");
  };

  return (
    <AuthLayout
      title="Đăng nhập"
      subtitle="Chào mừng bạn quay trở lại. Đăng nhập để tiếp tục sử dụng hệ thống tuyển dụng."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Nhập email của bạn"
            value={form.email}
            onChange={handleChange}
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="block text-sm font-medium text-slate-200">
              Mật khẩu
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-cyan-400 transition hover:text-cyan-300"
            >
              Quên mật khẩu?
            </Link>
          </div>

          <input
            type="password"
            name="password"
            placeholder="Nhập mật khẩu"
            value={form.password}
            onChange={handleChange}
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />
        </div>

        <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-300">
          <input
            type="checkbox"
            name="rememberMe"
            checked={form.rememberMe}
            onChange={handleChange}
            className="h-4 w-4 rounded border-white/20 bg-slate-900 text-cyan-500 focus:ring-cyan-400"
          />
          Ghi nhớ đăng nhập
        </label>

        <button
          type="submit"
          className="h-12 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01] hover:from-cyan-400 hover:to-blue-500 active:scale-[0.99]"
        >
          Đăng nhập
        </button>

        <div className="relative py-1">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0f172a] px-4 text-xs uppercase tracking-[0.2em] text-slate-500">
              hoặc
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="h-11 rounded-2xl border border-white/10 bg-white/5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
          >
            Google
          </button>
          <button
            type="button"
            className="h-11 rounded-2xl border border-white/10 bg-white/5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
          >
            GitHub
          </button>
        </div>

        <p className="pt-2 text-center text-sm text-slate-400">
          Chưa có tài khoản?{" "}
          <Link
            to="/register"
            className="font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Đăng ký ngay
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;