import { Outlet } from "react-router-dom";
import Navbar from "../Home/Home/Header/Navbar";

const Main = () => {
    return (
        <div className="mx-2 md:mx-12">
         <Navbar></Navbar>
         <Outlet></Outlet>   
        </div>
    );
};

export default Main;