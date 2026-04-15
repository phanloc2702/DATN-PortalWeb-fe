const SettingsPage = () => {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-medium text-cyan-700">System Settings</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Cài đặt hệ thống</h2>
        <p className="mt-3 text-base leading-8 text-slate-600">
          Quản lý các cấu hình chung của nền tảng, quy tắc kiểm duyệt và thông tin vận hành.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Cấu hình nền tảng</h3>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Tên hệ thống
              </label>
              <input
                type="text"
                defaultValue="Job Portal"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email hỗ trợ
              </label>
              <input
                type="email"
                defaultValue="support@jobportal.vn"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Hotline
              </label>
              <input
                type="text"
                defaultValue="0123 456 789"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Quy tắc kiểm duyệt</h3>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Duyệt tin tuyển dụng tự động
              </label>
              <select className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
                <option>Tắt</option>
                <option>Bật</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Yêu cầu xác minh công ty
              </label>
              <select className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
                <option>Bắt buộc</option>
                <option>Không bắt buộc</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Thời gian lưu log hệ thống
              </label>
              <select className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
                <option>30 ngày</option>
                <option>90 ngày</option>
                <option>180 ngày</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900">Tuỳ chọn vận hành</h3>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            "Cho phép nhà tuyển dụng tự chỉnh sửa hồ sơ công ty",
            "Gửi email thông báo khi có ứng viên mới",
            "Ẩn tin tuyển dụng hết hạn tự động",
            "Cho phép ứng viên tải nhiều CV",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
            >
              <input type="checkbox" defaultChecked className="h-4 w-4" />
              {item}
            </label>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm">
            Lưu cài đặt
          </button>
          <button className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            Khôi phục mặc định
          </button>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;