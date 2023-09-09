import React from "react"

type SidebarProps = {
    icon: React.ReactNode,
    title: string,
    isSelect: boolean
}
const SidebarOption = ({ icon, title, isSelect }: SidebarProps) => {
    return (
        <div className={`py-3  px-5 rounded-3xl flex items-center gap-7 max-w-[220px] w-full ${isSelect ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            {icon}
            <span className={`${isSelect ? 'text-black' : 'text-white'} text-xl`}>{title}</span>
        </div>
    )
}

export default SidebarOption