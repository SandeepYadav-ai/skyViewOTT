import { useState } from "react";
export const State = () => {
    // let value = 0;
    // const handlerbutton = () => {
    //     value++;
    //     console.log(value);
    const [count, setCount] = useState(0);
    const handlerbutton = () => {
        setCount(() => count + 1);
        console.log(count);
    };
    return (
        <>
        <h1>{count}</h1>
        <button onClick={handlerbutton}>Increment</button>
        </>
    );
};
