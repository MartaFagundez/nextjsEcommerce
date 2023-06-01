import React from 'react';
import Link from "next/link";
import { HiOutlineBuildingStorefront, HiOutlineArchiveBox, HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";

export default function Nav() {
  return (
    <div>
        <Link href={"/"}
        className='text-white flex items-center'>
            <HiOutlineBuildingStorefront size={20}/>
            <p>StoreAdmin</p>
        </Link>
        <nav>
            <Link href={"/"}
            className='text-white flex items-center'>
                <AiOutlineDashboard size={20} />
                <p>Dashboard</p>
            </Link>

            <Link href={"/"}
            className='text-white flex items-center'>
                <HiOutlineArchiveBox size={20} />
                <p>Products</p>
            </Link>

            <Link href={"/"}
            className='text-white flex items-center'>
                <HiOutlineClipboardDocumentList size={20} />
                <p>Orders</p>
            </Link>

            <Link href={"/"}
            className='text-white flex items-center'>
                <LuSettings size={20} />
                <p>Settings</p>
            </Link>
        </nav>
    </div>
  )
}

