'use client'

import AppSideBar from "@/components";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'

export default function DashboardLayout({ children }) {
    return (
        <div className="flex">
            <div className="h-screen">
                {/* <AppSideBar></AppSideBar> */}
                <Sidebar className="h-full">
                    <Menu>
                        <MenuItem component={<Link href="/dashboard"/>} >Dashboard</MenuItem>
                        <SubMenu label="Products">
                            <MenuItem component={<Link href="/dashboard/products"/>} className="text-slate-500">Products</MenuItem>
                            <MenuItem className="text-slate-500">Add Product</MenuItem>
                        </SubMenu>
                        <MenuItem>Bar</MenuItem>
                    </Menu>
                </Sidebar>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}
