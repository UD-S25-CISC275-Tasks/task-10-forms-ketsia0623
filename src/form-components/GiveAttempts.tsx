import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestAmount, setRequestAmount] = useState<string>("");

    const handleUse = () => {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    };

    const handleGain = () => {
        const amount = parseInt(requestAmount, 10);
        if (!isNaN(amount) && amount > 0) {
            setAttempts(attempts + amount);
        }
        setRequestAmount("");
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>
                Attempts Left: <strong>{attempts}</strong>
            </p>

            <label>
                Request More Attempts:
                <input
                    type="number"
                    value={requestAmount}
                    onChange={(e) => {
                        setRequestAmount(e.target.value);
                    }}
                />
            </label>

            <button onClick={handleUse} disabled={attempts === 0}>
                Use
            </button>
            <button onClick={handleGain}>Gain</button>
        </div>
    );
}
