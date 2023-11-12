import React from 'react';
import { useGlobalContext } from '../context/useGlobalContext';
import { Navigate } from 'react-router-dom';

function AdminProtected({ children }: React.PropsWithChildren) {
  const { user } = useGlobalContext();

  return user && user.role === 'admin' ? (
    <>{children}</>
  ) : (
    <Navigate
      to={'/login'}
      replace
    />
  );
}

export default AdminProtected;
