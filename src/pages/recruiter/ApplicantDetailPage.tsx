import { Link, useParams } from "react-router-dom";

interface ApplicantDetail {
  id: number;
  name: string;
  email: string;
  phone: string;
  appliedJob: string;
  appliedAt: string;
  status: string;
  location: string;
  experience: string;
  expectedSalary: string;
  summary: string;
  skills: string[];
  education: string[];
  projects: string[];
}

const applicantsMap: Record<number, ApplicantDetail> = {
  1: {
    id: 1,
    name: "Nguyễn Minh Anh",
    email: "minhanh@example.com",
    phone: "0988 123 456",
    appliedJob: "Frontend Developer Intern",
    appliedAt: "08/04/2026",
    status: "Mới ứng tuyển",
    location: "Hà Nội",
    experience: "Intern / Fresher",
    expectedSalary: "4 - 6 triệu",
    summary:
      "Sinh viên năm cuối định hướng Frontend Developer, có kinh nghiệm làm project cá nhân với React, TypeScript và Tailwind. Mong muốn được tham gia môi trường thực tế để phát triển kỹ năng và tư duy sản phẩm.",
    skills: ["React", "TypeScript", "Tailwind", "REST API", "Figma"],
    education: [
      "Đại học Bách Khoa Hà Nội - Công nghệ thông tin",
      "GPA: 2.8/4.0",
    ],
    projects: [
      "Book Management System - React + Spring Boot",
      "Face Recognition System - Python + OpenCV",
    ],
  },
  2: {
    id: 2,
    name: "Trần Đức Long",
    email: "duclong@example.com",
    phone: "0912 456 789",
    appliedJob: "Java Spring Boot Fresher",
    appliedAt: "07/04/2026",
    status: "Đã xem hồ sơ",
    location: "Hồ Chí Minh",
    experience: "Fresher",
    expectedSalary: "8 - 10 triệu",
    summary:
      "Ứng viên định hướng Backend với Java, Spring Boot và MySQL. Đã có kinh nghiệm làm đồ án web và API RESTful.",
    skills: ["Java", "Spring Boot", "MySQL", "JPA", "Postman"],
    education: [
      "Đại học Công nghệ TP.HCM - Kỹ thuật phần mềm",
      "GPA: 3.1/4.0",
    ],
    projects: [
      "Student Management API - Java Spring Boot",
      "E-commerce mini project - Java + MySQL",
    ],
  },
  3: {
    id: 3,
    name: "Phạm Thu Hà",
    email: "thuha@example.com",
    phone: "0977 222 111",
    appliedJob: "Frontend Developer Intern",
    appliedAt: "06/04/2026",
    status: "Mời phỏng vấn",
    location: "Đà Nẵng",
    experience: "Intern / Fresher",
    expectedSalary: "5 - 7 triệu",
    summary:
      "Yêu thích xây dựng giao diện đẹp, có khả năng phối hợp thiết kế và frontend implementation. Từng tham gia project UI/UX và React.",
    skills: ["React", "Tailwind", "UI/UX", "Figma", "Responsive Design"],
    education: [
      "Đại học Đà Nẵng - Công nghệ phần mềm",
      "GPA: 3.2/4.0",
    ],
    projects: [
      "Portfolio Website - React + Tailwind",
      "Event Landing Page - HTML/CSS/JS",
    ],
  },
};

const statusClass = (status: string) => {
  switch (status) {
    case "Mới ứng tuyển":
      return "bg-cyan-50 text-cyan-700";
    case "Đã xem hồ sơ":
      return "bg-blue-50 text-blue-700";
    case "Mời phỏng vấn":
      return "bg-violet-50 text-violet-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

const ApplicantDetailPage = () => {
  const { id } = useParams();
  const applicant = applicantsMap[Number(id)];

  if (!applicant) {
    return (
      <section className="space-y-6">
        <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">Không tìm thấy ứng viên</h2>
          <p className="mt-3 text-slate-500">Ứng viên này không tồn tại hoặc đã bị xóa.</p>
          <Link
            to="/recruiter/applications"
            className="mt-6 inline-flex h-11 items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white"
          >
            Quay lại danh sách ứng viên
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div>
        <Link
          to="/recruiter/applications"
          className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-700"
        >
          ← Quay lại danh sách ứng viên
        </Link>
      </div>

      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-cyan-100 text-3xl font-bold text-cyan-700">
              {applicant.name
                .split(" ")
                .slice(-2)
                .map((part) => part[0])
                .join("")}
            </div>

            <div className="mt-5">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass(
                  applicant.status
                )}`}
              >
                {applicant.status}
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">{applicant.name}</h2>
            <p className="mt-2 text-sm text-slate-500">
              Ứng tuyển vị trí {applicant.appliedJob}
            </p>

            <div className="mt-8 w-full space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left">
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-1 font-medium text-slate-900">{applicant.email}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Số điện thoại</p>
                <p className="mt-1 font-medium text-slate-900">{applicant.phone}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Địa điểm</p>
                <p className="mt-1 font-medium text-slate-900">{applicant.location}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Kinh nghiệm</p>
                <p className="mt-1 font-medium text-slate-900">{applicant.experience}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Mức lương mong muốn</p>
                <p className="mt-1 font-medium text-slate-900">{applicant.expectedSalary}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Ngày ứng tuyển</p>
                <p className="mt-1 font-medium text-slate-900">{applicant.appliedAt}</p>
              </div>
            </div>

            <div className="mt-6 grid w-full gap-3">
              <button className="inline-flex h-11 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-sm">
                Liên hệ ứng viên
              </button>
              <button className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Mời phỏng vấn
              </button>
              <button className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Tải CV
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Tóm tắt ứng viên</h3>
            <p className="mt-4 leading-8 text-slate-600">{applicant.summary}</p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Kỹ năng</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {applicant.skills.map((skill) => (
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
            <h3 className="text-2xl font-bold text-slate-900">Học vấn</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {applicant.education.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Project nổi bật</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {applicant.projects.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" />
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

export default ApplicantDetailPage;