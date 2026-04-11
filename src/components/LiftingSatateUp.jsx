import React, { useState } from "react";

export const LiftingStateUp = () => {
    const [count, setCount] = useState("");

    return (
        <>
        <ChildState value={count} onChange={setCount} />
        <DisplayState value={count} />
        </>
    );
};

const ChildState = ({ value, onChange }) => {
        
        return (
            <>
            <input
                type="text"
                placeholder="enter the name"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                />
            </>
        );
    };


    const DisplayState = ({ value }) => {
        return (
            <>
            <h1>the name is: {value}</h1>
            </>
        );
    };