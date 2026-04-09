import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import CandidateLayout from "../layouts/CandidateLayout";
import RecruiterLayout from "../layouts/RecruiterLayout";

import ProtectedRoute from "../components/shared/ProtectedRoute";
import RoleRedirect from "../components/shared/RoleRedirect";

import { ROLES } from "../utils/roles";

import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/public/LoginPage";
import RegisterPage from "../pages/public/RegisterPage";
import UnauthorizedPage from "../pages/public/UnauthorizedPage";
import NotFoundPage from "../pages/public/NotFoundPage";

import AdminDashboardPage from "../pages/admin/DashboardPage";
import UserManagementPage from "../pages/admin/UserManagementPage";
import JobManagementPage from "../pages/admin/JobManagementPage";

import CandidateDashboardPage from "../pages/candidate/DashboardPage";
import ProfilePage from "../pages/candidate/ProfilePage";
import CVPage from "../pages/candidate/CVPage";
import AppliedJobsPage from "../pages/candidate/AppliedJobsPage";
import SavedJobsPage from "../pages/candidate/SavedJobsPage";

import RecruiterDashboardPage from "../pages/recruiter/DashboardPage";
import CompanyProfilePage from "../pages/recruiter/CompanyProfilePage";
import PostJobPage from "../pages/recruiter/PostJobPage";
import MyJobsPage from "../pages/recruiter/MyJobsPage";
import ApplicationsPage from "../pages/recruiter/ApplicationsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "redirect-by-role", element: <RoleRedirect /> },
      { path: "unauthorized", element: <UnauthorizedPage /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: "users", element: <UserManagementPage /> },
      { path: "jobs", element: <JobManagementPage /> },
    ],
  },
  {
    path: "/candidate",
    element: (
      <ProtectedRoute allowedRoles={[ROLES.CANDIDATE]}>
        <CandidateLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <CandidateDashboardPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "cv", element: <CVPage /> },
      { path: "applied-jobs", element: <AppliedJobsPage /> },
      { path: "saved-jobs", element: <SavedJobsPage /> },
    ],
  },
  {
    path: "/recruiter",
    element: (
      <ProtectedRoute allowedRoles={[ROLES.RECRUITER]}>
        <RecruiterLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <RecruiterDashboardPage /> },
      { path: "company-profile", element: <CompanyProfilePage /> },
      { path: "post-job", element: <PostJobPage /> },
      { path: "my-jobs", element: <MyJobsPage /> },
      { path: "applications", element: <ApplicationsPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;