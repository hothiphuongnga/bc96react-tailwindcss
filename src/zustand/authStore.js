import { create } from "zustand";
import api from "../api/axios.js";

export const useAuth = create((set) => {
    return {
        userInfo: null,

        getInfo: async () => {
            try {
                const res = await api.post("/Users/getProfile");

                console.log({ res });
                console.log(res.data.content);

                set({ userInfo: res.data.content });
            } catch (error) {
                console.log(error);
                set({ userInfo: null });
            }
        },

        logout: () => {
            localStorage.removeItem("accessToken");
            window.location.href = "/login"
        },
    };
});
