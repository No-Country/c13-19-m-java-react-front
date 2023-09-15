'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"




type SidebarProps = {
    icon: React.ReactNode,
    title: string,
    pathname: string
}
const SidebarOption = ({ icon, title, pathname }: SidebarProps) => {


    const path = usePathname()

    return (
        <Link href={pathname} className={`py-3  px-5 rounded-3xl flex items-center gap-7 max-w-[220px] w-full ${path === pathname ? 'bg-white text-black' : 'bg-transparent text-white'} `}>
            {icon}
            <span className={` text-xl`}>{title}</span>
        </Link>
    )
}

export default SidebarOption