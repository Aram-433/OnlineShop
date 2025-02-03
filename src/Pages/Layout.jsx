import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu/NavMenu";
import { Fragment } from "react";

function Layout() {
  return (
    <Fragment>
      <NavMenu />
      <Outlet />
    </Fragment>
  );
}

export default Layout;
