import React from "react";
import { Route, Routes } from "react-router-dom";
import "./global.css";
import SignIn from "./_auth/forms/SignIn";
import { Home } from "./_root/pages";
import Signup from "./_auth/forms/Signup";
import AuthLayout from "./_auth/AuthLayout";

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
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
