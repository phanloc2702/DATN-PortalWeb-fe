const ProfilePage = () => {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-cyan-100 text-3xl font-bold text-cyan-700">
              LP
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">Lộc Phan Thanh</h2>
            <p className="mt-2 text-sm text-slate-500">Frontend / Fullstack Intern</p>

            <div className="mt-6 w-full rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left">
              <p className="text-sm text-slate-500">Mức hoàn thiện hồ sơ</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">85%</p>
              <div className="mt-4 h-3 rounded-full bg-slate-200">
                <div className="h-3 w-[85%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-cyan-700">Candidate Profile</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Hồ sơ cá nhân</h2>
            </div>

            <button className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm">
              Lưu thay đổi
            </button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Họ và tên</label>
              <input
                type="text"
                defaultValue="Lộc Phan Thanh"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                defaultValue="locphan@example.com"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Số điện thoại</label>
              <input
                type="text"
                defaultValue="0123 456 789"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
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
              <label className="mb-2 block text-sm font-medium text-slate-700">Vị trí mong muốn</label>
              <input
                type="text"
                defaultValue="Frontend Developer / Fullstack Intern"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Kinh nghiệm</label>
              <select className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
                <option>Intern / Fresher</option>
                <option>Dưới 1 năm</option>
                <option>1 - 2 năm</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">Kỹ năng chính</label>
            <input
              type="text"
              defaultValue="React, TypeScript, Java, Spring Boot"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">Giới thiệu bản thân</label>
            <textarea
              rows={5}
              defaultValue="Sinh viên năm cuối yêu thích phát triển web, đang tìm kiếm cơ hội thực tập để nâng cao kỹ năng frontend và fullstack."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;