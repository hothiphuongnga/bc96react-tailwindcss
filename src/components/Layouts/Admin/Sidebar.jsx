import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `
      flex items-center gap-3
      rounded-lg px-3 py-2.5
      text-sm font-medium
      transition-all duration-200
      ${
        isActive
          ? "bg-blue-600 text-white shadow-md shadow-blue-950/20"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }
    `;

  return (
    <aside className="flex min-h-screen w-64 flex-col bg-slate-950 text-white">
      {/* LOGO */}
      <div className="flex h-16 items-center border-b border-slate-800 px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-bold">
            A
          </div>

          <div>
            <h1 className="text-sm font-semibold">
              Admin Panel
            </h1>

            <p className="text-xs text-slate-500">
              Management System
            </p>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className="flex-1 overflow-y-auto px-3 py-5">
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Menu chính
        </p>

        <nav className="space-y-1">
          {/* DASHBOARD */}
          <NavLink
            to="/admin"
            end
            className={menuClass}
          >
            <span>Dashboard</span>
          </NavLink>

          {/* SẢN PHẨM */}
          <NavLink
            to="/admin/products"
            className={menuClass}
          >
            <span>Sản phẩm</span>
          </NavLink>

          {/* NGƯỜI DÙNG */}
          <NavLink
            to="/admin/users"
            className={menuClass}
          >
            <span>Người dùng</span>
          </NavLink>

          {/* ĐƠN HÀNG */}
          <NavLink
            to="/admin/orders"
            className={menuClass}
          >
            <span>Đơn hàng</span>
          </NavLink>

          {/* CÀI ĐẶT */}
          <NavLink
            to="/admin/setting"
            className={menuClass}
          >
            <span>Cài đặt</span>
          </NavLink>
        </nav>
      </div>

      {/* USER BOTTOM */}
      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center gap-3 rounded-xl bg-slate-900 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold">
            AD
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">
              Administrator
            </p>

            <p className="truncate text-xs text-slate-500">
              admin@gmail.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}