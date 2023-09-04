import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
