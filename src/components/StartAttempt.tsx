import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => [setProgress(true), setAttempt(attempt - 1)]}
                disabled={progress || attempt === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setProgress(false)} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={() => setAttempt(attempt + 1)} disabled={progress}>
                Mulligan
            </Button>
            <p></p>
            <span>{attempt}</span>
        </div>
    );
}
