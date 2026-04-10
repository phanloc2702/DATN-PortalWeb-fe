const PostJobPage = () => {
  return (
    <section className="space-y-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-cyan-700">Create Job Post</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Đăng tin tuyển dụng mới</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Tạo tin tuyển dụng chuyên nghiệp với đầy đủ thông tin để thu hút ứng viên phù hợp.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Tiêu đề công việc</label>
              <input
                type="text"
                placeholder="Ví dụ: Frontend Developer Intern"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Loại công việc</label>
              <select className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
                <option>Internship</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Remote</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Địa điểm</label>
              <input
                type="text"
                placeholder="Hà Nội"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Mức lương</label>
              <input
                type="text"
                placeholder="8 - 12 triệu"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Kinh nghiệm</label>
              <select className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
                <option>Không yêu cầu</option>
                <option>Dưới 1 năm</option>
                <option>1 - 2 năm</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Kỹ năng yêu cầu</label>
              <input
                type="text"
                placeholder="React, TypeScript, Tailwind"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Mô tả công việc</label>
              <textarea
                rows={5}
                placeholder="Nhập mô tả chi tiết công việc..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Yêu cầu ứng viên</label>
              <textarea
                rows={5}
                placeholder="Nhập yêu cầu ứng viên..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Quyền lợi</label>
              <textarea
                rows={5}
                placeholder="Nhập quyền lợi dành cho ứng viên..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Cài đặt tin đăng</h3>

            <div className="mt-5 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Hạn nộp hồ sơ</label>
                <input
                  type="date"
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Trạng thái</label>
                <select className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
                  <option>Đăng ngay</option>
                  <option>Lưu nháp</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Hiển thị nổi bật</label>
                <select className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none">
                  <option>Có</option>
                  <option>Không</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button className="inline-flex h-11 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-sm">
                Đăng tin tuyển dụng
              </button>
              <button className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Lưu nháp
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Gợi ý tối ưu tin đăng</h3>
            <div className="mt-4 space-y-3">
              {[
                "Tiêu đề rõ ràng sẽ tăng tỷ lệ click.",
                "Mô tả chi tiết giúp thu hút ứng viên phù hợp hơn.",
                "Nêu rõ kỹ năng và quyền lợi để tăng tỷ lệ apply.",
              ].map((tip) => (
                <div key={tip} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  <p className="text-sm leading-7 text-slate-600">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostJobPage;