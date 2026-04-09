import { Navigate } from "react-router-dom";
import { storage } from "../../utils/storage";
import { ROLES } from "../../utils/roles";

const RoleRedirect = () => {
  const role = storage.getRole();

  switch (role) {
    case ROLES.ADMIN:
      return <Navigate to="/admin" replace />;
    case ROLES.CANDIDATE:
      return <Navigate to="/candidate" replace />;
    case ROLES.RECRUITER:
      return <Navigate to="/recruiter" replace />;
    default:
      return <Navigate to="/" replace />;
  }
};

export default RoleRedirect;