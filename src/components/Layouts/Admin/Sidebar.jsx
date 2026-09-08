import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
      <h4 className="text-center mb-4">ADMIN</h4>

      <ul className="nav nav-pills flex-column gap-2">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Trang chủ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin" end             
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Admin
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/admin/setting" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Cài đặt
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
