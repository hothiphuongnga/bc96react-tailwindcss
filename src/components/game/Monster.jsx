import { useGame } from "../../zustand/gameStore.js";

export default function Monster() {
    const hp = useGame((state) => state.hp)

    return (
        <div className="text-center">
            <div className="mb-4 text-8xl">{hp > 0 ? "👾" : "💀"}</div>

            <h2 className="mb-3 text-2xl font-bold">HP: {hp} / 100</h2>

            <div className="mx-auto h-5 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                    className="h-full bg-red-500 transition-all duration-300"
                    style={{
                        width: `${hp}%`,
                    }}
                ></div>
            </div>

            <div className="h-6.25 mt-4">
                {hp === 0 && <p className="font-bold text-red-500">Quái vật đã bị tiêu diệt!</p>}
            </div>
        </div>
    );
}