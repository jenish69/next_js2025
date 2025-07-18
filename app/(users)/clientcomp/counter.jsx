import { useState } from "react"

export const Counter = () => {
    const [inc, setInc] = useState(0);

    return (
        <button className="bg-amber-400 text-black p-5" onClick={() => setInc((prev) => prev+1)}>
            Add - {inc}
        </button>
    );
}