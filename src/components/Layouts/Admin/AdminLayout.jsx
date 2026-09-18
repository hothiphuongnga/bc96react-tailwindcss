import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* HEADER */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Dashboard
            </h2>
          </div>

          <button
            className="
              rounded-lg border border-slate-200
              px-4 py-2
              text-sm font-medium text-slate-700
              transition
              hover:bg-slate-100
            "
          >
            Đăng xuất
          </button>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
