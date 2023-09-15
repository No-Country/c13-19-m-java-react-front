import InputSearch from "@/app/components/InputSearch";
import SelectOptions from "@/app/components/SelectOptions";
import UserProfile from "@/app/components/UserProfile";
import GmailIcon from "@/app/icons/GmailIcon";
import LearnWithMe from "@/app/icons/LearnWithMe";
import NotificationIcon from "@/app/icons/NotificationIcon";
import React from "react";
import SidebarOption from "@/app/components/SidebarOption";
import HomeIcon from "@/app/icons/HomeIcon";
import BooksIcon from "@/app/icons/BooksIcon";
import BookIcon from "@/app/icons/BookIcon";
import Profile from "@/app/icons/Profile";
import Link from "next/link";
import CoursesIcon from "@/app/icons/CoursesIcon";

const DashboradLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen flex relative overflow-hidden">
            <div className="w-72 z-10 h-screen flex flex-col gap-9 justify-center items-center bg-[#5316B6]">
                <div className="absolute top-20">
                    <LearnWithMe />
                </div>
                <SidebarOption icon={<HomeIcon isSelect={true} />} title="Home" pathname="/pages/dashboard/sections/home" />
                <SidebarOption icon={<BooksIcon isSelect={false} />} title="Ruta LWM" pathname="/pages/dashboard/sections/ruta" />
                <SidebarOption icon={<CoursesIcon isSelect={false} />} title="Mis Cursos" pathname="/pages/dashboard/sections/courses" />
                <Link href='/pages/aboutus' className="absolute bottom-20 text-xl text-white border-b-2">
                    Sobre nosotros
                </Link>
            </div>
            <div className="flex flex-col w-full">
                <nav className="h-20 w-full  flex  justify-between px-5 items-center bg-[#FFFFFF]">
                    <h2 className="text-3xl font-semibold">Dashboard</h2>
                    <div className="flex bg-[#F2F2F7] rounded-3xl  px-4">
                        <InputSearch />
                        <SelectOptions />
                    </div>
                    <div className="flex gap-6 items-center">
                        <GmailIcon />
                        <NotificationIcon />
                        <UserProfile />
                    </div>
                </nav>
                <div className="overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboradLayout;
