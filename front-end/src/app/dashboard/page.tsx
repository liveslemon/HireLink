"use client";

import { Home, Briefcase, Bookmark, Settings } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-10">HireLink</h2>

        <nav className="space-y-6">
          <a href="#" className="flex items-center gap-3">
            <Home size={18} />
            Overview
          </a>

          <a href="#" className="flex items-center gap-3">
            <Briefcase size={18} />
            Jobs
          </a>

          <a href="#" className="flex items-center gap-3">
            <Bookmark size={18} />
            Saved
          </a>

          <a href="#" className="flex items-center gap-3">
            <Settings size={18} />
            Settings
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </main>
    </div>
  );
}
