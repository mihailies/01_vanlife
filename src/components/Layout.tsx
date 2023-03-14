import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export function Layout() {
    return <div className="site-wrapper">
        <Header />
        <Outlet />
        <Footer />
    </div>

}