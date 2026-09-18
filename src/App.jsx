import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/Layouts/Admin/AdminLayout";
import AuthLayout from "./components/Layouts/AuthLayout.jsx";
import MainLayout from "./components/Layouts/MainLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Game from "./pages/Game.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { useAuth } from "./zustand/authStore.js";
import ManagerProduct from "./pages/Admin/ManagerProduct.jsx";
// import heroImg from './assets/hero.png'

function App() {
    const getInfo = useAuth((state) => state.getInfo);
    useEffect(() => {
        getInfo();
    }, []);
    
    return (
        <Routes>
            {/* Layout web user */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="game" element={<Game />} />
            </Route>

            {/* Layout đăng ký đăng nhập */}
            <Route element={<AuthLayout />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Route>

            {/* layout Admin */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<ManagerProduct />} /> 

            </Route>
        </Routes>
    );
}

export default App;
