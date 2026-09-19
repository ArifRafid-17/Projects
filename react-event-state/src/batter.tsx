import { useState } from "react"

export default function Batter() {

    const [runs, addruns] = useState(0);
    const handleRun = () => {
        addruns(runs + 1);
    }
    const handleRun4 = () => {
        addruns(runs + 4);
    }
    const handleRun6 = () => {
        addruns(runs + 6);
    }

    return (
        <>
            <div>
                <p>-------------</p>
                <h2>Score: {runs}</h2>
                <button onClick={handleRun}>Add 1</button>
                <button onClick={handleRun4}> Add 4</button>
                <button onClick={handleRun6}> Add 6 </button>
            </div>
        </>
    )
}