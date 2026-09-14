import BearCounter from "../components/demo/BearCounter.jsx";
import Controls from "../components/demo/Controls.jsx";

export default function Home() {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold underline text-red-400">Hello world!</h1>
            <BearCounter />
            <Controls />
        </div>
    );
}
