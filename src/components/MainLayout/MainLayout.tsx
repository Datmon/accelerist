import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <header>ACCELERIST</header>
      <div className="body">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
