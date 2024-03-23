import { useReducer, useState } from "react";

type PropCount={
}

function reducer(state:any, action:any){
    console.log("action: ", action);
    console.log("state trước: ",state);
    switch(action){
        case "ADD":
            state = state + 1
            break;
        case "DELETE":
            state = state -1;
            break;
        case "RESET":
            state = 0;
            break;
        default: 
            state = state;
    }
    console.log("state sau: ",state);
    

    return state;
}

function Count(prop: PropCount){
    // const [count, setCount]= useState(0);
    const [count, dispatch] = useReducer(reducer,0)

    return (
        <>
            <h1>Count: {count}</h1>
            <button className="btn btn-success" 
                onClick={() => {dispatch("ADD")}}>Tăng</button>
            <button className="btn btn-warning" 
                onClick={() => {dispatch("DELETE")}}>Giảm</button>
            <button className="btn btn-primary" 
                onClick={() => {dispatch("RESET")}}>Reset</button>
        </>
    )
}

export default Count;