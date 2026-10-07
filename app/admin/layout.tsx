import AdminNavbar from "@/components/Admin/AdminNavbar";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Admin",
    description: "JiFrame admin dashboard",
};


export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-blue-200 flex">
            <aside className="p-5 min-h-screen flex justify-center items-center border-r border-gray-400">
                <AdminNavbar />
            </aside>
            <div className="w-full">
                <header className="h-20 flex items-center justify-center w-full border-b border-gray-400">
                    <h1 className="text-3xl text-center">Welcome to Dashboard</h1>
                </header>
                <main>{children}</main>
            </div>
        </div>
    );
}
