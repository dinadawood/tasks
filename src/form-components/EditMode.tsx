import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updatingName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updatingStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                id="editing"
                type="switch"
                label="Edit"
                onChange={updateEdit}
                checked={editing}
            />
            <div>
                {editing ? (
                    <div>
                        <p></p>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updatingName} />
                        <Form.Check
                            id="student"
                            type="checkbox"
                            label="Is a student?"
                            onChange={updatingStudent}
                            checked={student}
                        />
                    </div>
                ) : (
                    <div>
                        <b>
                            {name} is {student === true ? "" : "not"} a student
                        </b>
                    </div>
                )}
            </div>
        </div>
    );
}
