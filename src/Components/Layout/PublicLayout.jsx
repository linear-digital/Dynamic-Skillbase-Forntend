import { Outlet } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Footer from '../../Pages/Footer/Footer';
import { TopNavbar } from '../Shared/Navbar';



const PublicLayout = () => {


    return (
        <div className="bg-white min-h-screen text-black pt-5">
            <TopNavbar />
            <Toaster />
            <div className="min-h-[50vh]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default PublicLayout;