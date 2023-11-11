import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Navigate } from "react-router-dom";

function UserProtected({ children }: React.PropsWithChildren) {
  const { user } = useGlobalContext();

  return user ? <>{children}</> : <Navigate to={"/login"} replace />;
}

export default UserProtected;
