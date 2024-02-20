import React from "react";
import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SignIn from "./_auth/forms/SignIn";
import { Home } from "./_root/pages";
import Signup from "./_auth/forms/Signup";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/*Public*/}
        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<Signup />} />
        </Route>
        {/*Private*/}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
