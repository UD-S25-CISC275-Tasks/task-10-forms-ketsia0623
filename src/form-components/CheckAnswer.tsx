import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState("");

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={answer}
                onChange={(e) => {
                    setAnswer(e.target.value);
                }}
            />
            <span> {answer === expectedAnswer ? "✔️" : "❌"} </span>
        </div>
    );
}
