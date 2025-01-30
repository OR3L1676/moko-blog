import NavBar from "@/components/NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <header className="grid grid-cols-1 sticky top-0 right-0 z-10">
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
