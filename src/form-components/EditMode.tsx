import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <label className="form-switch">
                    Edit Mode
                    <input
                        type="checkbox"
                        checked={editMode}
                        onChange={() => {
                            setEditMode(!editMode);
                        }}
                    ></input>
                </label>
            </div>
            {editMode ?
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    ></input>

                    <label>
                        Is student?
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent);
                            }}
                        />
                    </label>
                </div>
            :   <h3>
                    {name} is {isStudent ? "" : "not"} a student
                </h3>
            }
        </div>
    );
}
