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

const DashboradLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex relative">
            <div className="w-72 h-screen relative flex flex-col gap-9 justify-center items-center bg-[#5316B6]">
                <div className="absolute top-20">
                    <LearnWithMe />
                </div>
                <SidebarOption icon={<HomeIcon isSelect={true} />} title="Home" isSelect={true} />
                <SidebarOption icon={<BooksIcon isSelect={false} />} title="Ruta" isSelect={false} />
                <SidebarOption icon={<BookIcon isSelect={false} />} title="Cursos" isSelect={false} />
                <SidebarOption icon={<Profile isSelect={false} />} title="Perfil" isSelect={false} />
            </div>
            <div className="flex flex-col w-full">
                <nav className="h-20 w-full flex justify-between px-5 items-center bg-[#FFFFFF]">
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
                {children}
            </div>
        </div>
    );
};

export default DashboradLayout;
