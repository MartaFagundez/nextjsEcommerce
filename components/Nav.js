import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { HiOutlineBuildingStorefront, HiOutlineArchiveBox, HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";

export default function Nav() {
    const router = useRouter();
    const {pathname} = router;

    const inactiveLink = "flex items-center gap-2 mb-4 p-1 px-2 rounded-l-lg";
    const activeLink = inactiveLink + " bg-white text-blue-800";

  return (
    <div>
        <Link href={"/"}
        className='text-white flex items-center gap-1 my-4 mr-4 px-2'>
            <HiOutlineBuildingStorefront size={22}/>
            <p className='font-bold'>StoreAdmin</p>
        </Link>
        <hr className='h-px my-4 bg-white border-0 mr-4 px-2' />
        <nav className='text-white'>
            <Link href={"/"}
            className={pathname === "/" ? activeLink : inactiveLink}>
                <AiOutlineDashboard size={20} />
                <p>Dashboard</p>
            </Link>

            <Link href={"/products"}
            className={pathname.includes("/products") ? activeLink : inactiveLink}>
                <HiOutlineArchiveBox size={20} />
                <p>Products</p>
            </Link>

            <Link href={"/orders"}
            className={pathname.includes("/orders") ? activeLink : inactiveLink}>
                <HiOutlineClipboardDocumentList size={20} />
                <p>Orders</p>
            </Link>

            <Link href={"/settings"}
            className={pathname.includes("/settings") ? activeLink : inactiveLink}>
                <LuSettings size={20} />
                <p>Settings</p>
            </Link>
        </nav>
    </div>
  )
}

