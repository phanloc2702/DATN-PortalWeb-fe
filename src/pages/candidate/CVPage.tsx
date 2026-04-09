const CVPage = () => {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-cyan-700">My CV</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Quản lý CV của bạn</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Tải lên CV, chỉnh sửa thông tin hoặc tạo bản CV mới để tăng cơ hội ứng tuyển.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm">
              Tải lên CV
            </button>
            <button className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              Tạo CV mới
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80"
            alt="CV"
            className="h-full min-h-[250px] w-full object-cover"
          />
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">CV hiện tại</h3>

          <div className="mt-5 rounded-3xl border border-dashed border-cyan-300 bg-cyan-50 p-6">
            <p className="text-lg font-semibold text-slate-900">CV_Frontend_Developer_LocPhan.pdf</p>
            <p className="mt-2 text-sm text-slate-600">
              Cập nhật lần cuối: 08/04/2026 • Kích thước: 1.2 MB
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm">
                Xem CV
              </button>
              <button className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700">
                Thay thế file
              </button>
              <button className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700">
                Tải xuống
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Gợi ý tối ưu CV</h3>

          <div className="mt-5 space-y-4">
            {[
              "Bổ sung kỹ năng nổi bật ngay phần đầu CV.",
              "Mô tả rõ công nghệ sử dụng trong project cá nhân.",
              "Thêm liên kết GitHub hoặc portfolio nếu có.",
              "Điều chỉnh mục tiêu nghề nghiệp sát vị trí ứng tuyển.",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVPage;