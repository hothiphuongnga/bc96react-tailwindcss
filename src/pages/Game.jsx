import GameControls from "../components/game/GameControls.jsx";
import Monster from "../components/game/Monster.jsx";

export default function Game() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">
                <h1 className="mb-8 text-center text-3xl font-bold">⚔️ Liên Minh Huyền Thoại</h1>

                <Monster />

                <GameControls />
            </div>
        </div>
    );
}
