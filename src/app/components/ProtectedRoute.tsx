import { Navigate } from "react-router";

interface Props {
  children: React.ReactNode;
  isAuth: boolean;
}

const ProtectedRoute = ({ children, isAuth }: Props) => {
  return isAuth ? <>{children}</> : <Navigate to="/admin" />;
};

export default ProtectedRoute;