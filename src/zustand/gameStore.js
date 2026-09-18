import { create } from "zustand";

export const useGame = create((set) => {
    return {
        hp: 100,
        attack: () => {
            set((state) => {
                const newHp = state.hp - 10;

                if (newHp <= 0) return { hp: 0 };

                return { hp: newHp };
            });
        },
        heal: (hpHeal) => {
            set((state) => {
                const newHp = state.hp + hpHeal;

                if (newHp >= 100) return { hp: 100 };

                return { hp: newHp };
            });
        },
        resetGame: () => {
            set({ hp: 100 });
        },

    };
});
