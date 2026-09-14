import { useBear } from "../../zustand/demoStore.js";

export default function Controls() {
    const increasePopulation = useBear((stateanhlong) => stateanhlong.increasePopulation);
    return (
        <button className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600" onClick={increasePopulation}>
            one up
        </button>
    );
}
