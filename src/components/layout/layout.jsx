import { Outlet } from 'react-router-dom';
import { AppBar } from '../appBar/appBar';
import { Suspense } from 'react';


export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>...Loading</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};