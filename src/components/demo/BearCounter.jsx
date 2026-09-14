import { useBear } from "../../zustand/demoStore.js";

export default function BearCounter() {
    const bears = useBear((state) => state.bears);
    return <h1 className="text-white">{bears} bears around here...</h1>;
}
