import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div id="main" className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-1 container mx-auto p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
