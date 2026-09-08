import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function MainLayout() {
  return (
    <div className="">
        <Header />
        <div className="container mx-auto">
            <Outlet />
        </div>
    </div>
  )
}
