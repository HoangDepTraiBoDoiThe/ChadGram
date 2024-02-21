import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center py-10 flex-col">
            <Outlet />
          </section>
          <img
            className="hidden sm:block"
            src="/assets/images/side-img.svg"
            alt="side-img"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
