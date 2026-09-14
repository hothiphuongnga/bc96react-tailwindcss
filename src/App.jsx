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
// import heroImg from './assets/hero.png'

function App() {
    const getInfo = useAuth((state) => state.getInfo);
    useEffect(() => {
        getInfo();
    }, []);
    
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/game" element={<Game />} />
            </Route>

            <Route element={<AuthLayout />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    );
}

export default App;
