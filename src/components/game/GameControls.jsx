import { useGame } from "../../zustand/gameStore.js";

export default function GameControls() {
    const attack = useGame((state) => state.attack);
    const heal = useGame((state) => state.heal);
    const resetGame = useGame((state) => state.resetGame);

    return (
        <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={attack} className="rounded-lg bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600">
                ⚔️ Tấn công
            </button>

            <button
                onClick={() => {
                    heal(1);
                }}
                className="rounded-lg bg-green-500 px-5 py-2 font-semibold text-white hover:bg-green-600"
            >
                ❤️ Hồi máu
            </button>

            <button onClick={resetGame} className="rounded-lg bg-gray-700 px-5 py-2 font-semibold text-white hover:bg-gray-800">
                🔄 Chơi lại
            </button>
        </div>
    );
}
