import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((c: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="color"
                        onChange={(event) => setColor(event.target.value)}
                        label={c}
                        key={c}
                        value={c}
                        checked={color === c}
                        style={{ backgroundColor: c }}
                    />
                ))}
                <span>
                    Color is:
                    <span
                        style={{ backgroundColor: color }}
                        data-testid="colored-box"
                    >
                        {color}
                    </span>
                </span>
            </div>
        </div>
    );
}
