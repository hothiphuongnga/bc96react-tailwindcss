import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function AdminLayout() {
  return (
     <div className="d-flex min-vh-100">
      {/* SIDEBAR */}
     <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-grow-1 bg-light">
        {/* HEADER */}
        <nav className="navbar bg-white shadow-sm px-4">
          <span className="navbar-brand mb-0 h1">Dashboard</span>

          <button className="btn btn-outline-danger">
            Đăng xuất
          </button>
        </nav>

        {/* NỘI DUNG ROUTER */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
