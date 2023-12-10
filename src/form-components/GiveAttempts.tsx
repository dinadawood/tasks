import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    function updateRequests(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }

    function remainingRequest(attempt: number, request: string) {
        const parse = parseInt(request) || 0;
        setAttempt(attempt + parse);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>
                    Attempts Left: <b>{attempt}</b>
                </Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequests}
                />
            </Form.Group>
            <Button
                onClick={() => setAttempt(attempt - 1)}
                disabled={attempt === 0}
            >
                Use
            </Button>
            <Button onClick={() => remainingRequest(attempt, request)}>
                Gain
            </Button>
        </div>
    );
}
