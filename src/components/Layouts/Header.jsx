import { useAuth } from "../../zustand/authStore.js";

export default function Header() {
    const userInfo = useAuth((state) => state.userInfo);
    const logout = useAuth((state) => state.logout);

    return (
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
            {/* LEFT */}
            <div>
                <h1 className="text-xl font-bold text-gray-800">Shoeshop</h1>
                <p className="text-sm text-gray-500">Website bán hàng demo</p>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
                {/* Search */}
                <div className="hidden md:block">
                    <input type="text" placeholder="Tìm kiếm..." className="w-64 rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>

                {/* Notification */}
                <button className="relative rounded-lg p-2 text-gray-600 hover:bg-gray-100">
                    🔔
                    <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">3</span>
                </button>

                {/* User */}
                <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/100" alt="avatar" className="h-10 w-10 rounded-full object-cover" />

                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-gray-800">{userInfo?.name}</p>
                        <p className="text-xs text-gray-500">{userInfo?.email}</p>
                    </div>
                </div>

                {/* Logout */}
                <button
                    onClick={() => {
                        logout();
                    }}
                    className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                    Đăng xuất
                </button>
            </div>
        </header>
    );
}
