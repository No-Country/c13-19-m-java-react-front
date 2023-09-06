import InputSearch from "@/app/components/InputSearch";
import GmailIcon from "@/app/svg/GmailIcon";
import NotificationIcon from "@/app/svg/NotificationIcon";
import React from "react";

const DashboradLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex relative">
            <div className="w-64 h-screen bg-[#5316B6]"></div>

            <div className="flex flex-col w-full">
                <nav className="h-20 w-full flex justify-between items-center bg-[#FFFFFF]">
                    <h2>Cursos</h2>
                    <div className="flex">
                        <InputSearch />
                        <select name="select">
                            <option value="value1">Value 1</option>
                            <option value="value2" selected>
                                Value 2
                            </option>
                            <option value="value3">Value 3</option>
                        </select>
                    </div>
                    <div className="flex">
                        <GmailIcon />
                        <NotificationIcon />
                    </div>
                </nav>
                {children}
            </div>
        </div>
    );
};

export default DashboradLayout;
