const categories = [
  { id: 1, name: "Frontend Developer", jobs: 126 },
  { id: 2, name: "Backend Developer", jobs: 152 },
  { id: 3, name: "UI/UX Designer", jobs: 64 },
  { id: 4, name: "QA / Tester", jobs: 48 },
];

const CategoryManagementPage = () => {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-700">Category Management</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Danh mục ngành nghề</h2>
          <p className="mt-3 text-base leading-8 text-slate-600">
            Quản lý nhóm ngành nghề để hỗ trợ phân loại việc làm và cải thiện trải nghiệm tìm kiếm.
          </p>
        </div>

        <button className="inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm">
          Thêm danh mục
        </button>
      </div>

      <div className="space-y-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{category.name}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  {category.jobs} việc làm đang thuộc danh mục này
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="inline-flex h-11 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Chỉnh sửa
                </button>
                <button className="inline-flex h-11 items-center rounded-2xl bg-rose-50 px-5 text-sm font-semibold text-rose-700">
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryManagementPage;