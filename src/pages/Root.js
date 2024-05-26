import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import classes from "../index.css";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
