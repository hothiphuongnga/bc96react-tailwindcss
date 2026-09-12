import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../api/axios.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [notification, setNotification] = useState({ type: "", message: "" });
    const formRegister = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            try {
                console.log("[👉 formik values]", values);
                const res = await api.post("/Users/signup", values);

                console.log({ res });

                setNotification({
                    type: "success",
                    message: res.data.message,
                });

                formRegister.resetForm();
            } catch (error) {
                console.dir(error.response.data.message);

                setNotification({
                    type: "error",
                    message: error.response.data.message,
                });
            }
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name không được bỏ trống").min(3, "Tên không được thấp hơn 3 ký tự"),
            email: Yup.string().required("Email không được bỏ trống").email("Email không hợp lệ"),
            password: Yup.string()
                .required("Password không được bỏ trống")
                .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
                .matches(/[A-Z]/, "Mật khẩu phải có ít nhất 1 chữ hoa")
                .matches(/[a-z]/, "Mật khẩu phải có ít nhất 1 chữ thường")
                .matches(/[0-9]/, "Mật khẩu phải có ít nhất 1 chữ số")
                .matches(/[^A-Za-z0-9]/, "Mật khẩu phải có ít nhất 1 ký tự đặc biệt"),
        }),
    });

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tạo tài khoản mới</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Đã có tài khoản?{" "}
                        <Link to={"/login"} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                            Đăng nhập ngay
                        </Link>
                    </p>
                </div>

                {notification.message && (
                    <div className={`p-4 mb-4 text-sm rounded-lg ${notification.type === "error" ? "bg-red-50 text-red-800 dark:bg-gray-800 dark:text-red-400 border border-red-300" : "bg-green-50 text-green-800 dark:bg-gray-800 dark:text-green-400 border border-green-300"}`}>
                        {notification.message}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={formRegister.handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
                            <input
                                {...formRegister.getFieldProps("name")}
                                name="name"
                                type="text"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                placeholder="Nguyễn Văn A"
                            />
                            {formRegister.touched.name && formRegister.errors.name && <p className="mt-1 text-sm text-red-500">{formRegister.errors.name}</p>}
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input
                                {...formRegister.getFieldProps("email")}
                                name="email"
                                type="email"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                placeholder="name@company.com"
                            />
                            {formRegister.touched.email && formRegister.errors.email && <p className="mt-1 text-sm text-red-500">{formRegister.errors.email}</p>}
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                            <input
                                {...formRegister.getFieldProps("password")}
                                name="password"
                                type="password"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                placeholder="••••••••"
                            />
                            {formRegister.touched.password && formRegister.errors.password && <p className="mt-1 text-sm text-red-500">{formRegister.errors.password}</p>}
                        </div>
                    </div>

                    <button type="submit" className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>
    );
}
