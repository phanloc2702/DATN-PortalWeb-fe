import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { storage } from "../../utils/storage";
import type { Role } from "../../utils/roles";

interface ProtectedRouteProps {
  allowedRoles: Role[];
  children: ReactNode;
}

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const token = storage.getToken();
  const role = storage.getRole();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!role || !allowedRoles.includes(role as Role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;