const CompanyProfilePage = () => {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80"
              alt="Company"
              className="h-28 w-28 rounded-3xl border border-slate-200 object-cover"
            />
            <h2 className="mt-4 text-2xl font-bold text-slate-900">TechVision Vietnam</h2>
            <p className="mt-2 text-sm text-slate-500">Phần mềm / Công nghệ</p>

            <div className="mt-6 w-full rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left">
              <p className="text-sm text-slate-500">Mức hoàn thiện hồ sơ công ty</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">88%</p>
              <div className="mt-4 h-3 rounded-full bg-slate-200">
                <div className="h-3 w-[88%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-cyan-700">Company Profile</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Hồ sơ công ty</h2>
            </div>

            <button className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm">
              Lưu thay đổi
            </button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Tên công ty</label>
              <input
                type="text"
                defaultValue="TechVision Vietnam"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Website</label>
              <input
                type="text"
                defaultValue="https://techvision.vn"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Lĩnh vực</label>
              <input
                type="text"
                defaultValue="Phần mềm / Công nghệ"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Quy mô</label>
              <select className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
                <option>100 - 300 nhân sự</option>
                <option>50 - 100 nhân sự</option>
                <option>300+ nhân sự</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Địa điểm</label>
              <input
                type="text"
                defaultValue="Hà Nội, Việt Nam"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email liên hệ</label>
              <input
                type="email"
                defaultValue="hr@techvision.vn"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">Giới thiệu công ty</label>
            <textarea
              rows={6}
              defaultValue="TechVision Vietnam là doanh nghiệp công nghệ tập trung phát triển giải pháp web, mobile và chuyển đổi số cho doanh nghiệp."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfilePage;