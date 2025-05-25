import { div } from "framer-motion/client";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


export default function MainLayout(){
    return (
        <div className="bg-gray-100 min-h-screen flex">
            <div className="flex flex-row flex-1">
                <Sidebar/>
                <div className="flex-1 p-4">
                        <Header/>

                        <Outlet/>
                </div>
            </div>
        </div>
    )
}