import React, { useState } from "react";

const allColors = [
    "red",
    "yellow",
    "blue",
    "purple",
    "green",
    "orange",
    "cyan",
    "magenta",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(allColors[0]);

    return (
        <div>
            <h3>Change Color</h3>

            {allColors.map((col) => (
                <label key={col}>
                    <input
                        type="radio"
                        //label={col}
                        name="color-options"
                        value={col}
                        checked={color === col} // make sure selected button is checked
                        onChange={() => {
                            setColor(col); // Updates state when clicked
                        }}
                    />
                    {col}
                </label>
            ))}

            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "50px",
                    backgroundColor: color,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                    borderRadius: "5px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
