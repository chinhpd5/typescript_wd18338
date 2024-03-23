import { useState } from "react";

type PropCount={
}

function Count(prop: PropCount){
    const [count, setCount]= useState(0);

    return (
        <>
            <h1>Count: {count}</h1>
            <button className="btn btn-success" onClick={()=>{setCount(count+1)}}>Tăng</button>
            <button className="btn btn-warning" onClick={()=>{setCount(count-1)}}>Giảm</button>
            <button className="btn btn-primary" onClick={()=>{setCount(0)}}>Reset</button>
        </>
    )
}

export default Count;