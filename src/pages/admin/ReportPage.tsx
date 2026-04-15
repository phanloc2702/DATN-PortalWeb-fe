const reportCards = [
  { title: "Tổng lượt truy cập", value: "128,450" },
  { title: "Đơn ứng tuyển tháng này", value: "5,236" },
  { title: "Tỷ lệ tuyển thành công", value: "37%" },
  { title: "Báo cáo vi phạm", value: "14" },
];

const ReportPage = () => {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-medium text-cyan-700">Reports & Statistics</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Báo cáo & thống kê</h2>
        <p className="mt-3 text-base leading-8 text-slate-600">
          Theo dõi dữ liệu hoạt động của hệ thống để đánh giá hiệu suất và hỗ trợ ra quyết định.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {reportCards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-slate-500">{card.title}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Hiệu suất nền tảng</h3>
          <div className="mt-6 space-y-5">
            {[
              ["Tỷ lệ ứng tuyển thành công", "37%"],
              ["Tỷ lệ công ty hoạt động", "82%"],
              ["Tỷ lệ tin tuyển dụng được duyệt", "91%"],
              ["Tỷ lệ phản hồi của nhà tuyển dụng", "68%"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-600">{label}</span>
                  <span className="font-semibold text-slate-900">{value}</span>
                </div>
                <div className="h-3 rounded-full bg-slate-200">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    style={{ width: value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Nhận định nhanh</h3>
          <div className="mt-5 space-y-4">
            {[
              "Lưu lượng truy cập tăng 12% so với tháng trước.",
              "Nhu cầu tuyển Frontend và Backend tiếp tục chiếm tỷ trọng cao.",
              "Nhà tuyển dụng phản hồi nhanh có tỷ lệ tuyển thành công tốt hơn.",
              "Danh mục công nghệ đang tăng trưởng mạnh là React, Java và Node.js.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
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

export default ReportPage;