import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/application/step-1';
  
  const roleFromState = location.state?.role;
  const role = roleFromState || (
               location.pathname.startsWith('/admin') ? 'admin' : 
               location.pathname.startsWith('/validator') ? 'validator' : 'candidate'
  );

  if (isAuthPage) {
    return <Outlet />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role={role} />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
