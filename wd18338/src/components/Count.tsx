import { useContext, useReducer, useState } from "react";
import IProduct from "../interfaces/IProduct";
import ProductList from "./Product/ProductList";
import { CountContext } from "../context/CountProvider";

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
function reducer2(state:any, action:any){
    console.log(action);
    
    switch(action.type){
        case "GAN":
            return action.payload;
        default:
            return state;
    }
}
const initData={
    listProduct : [] as IProduct[],
    isLoading: false as boolean
}

function reducerData (state: any, action:any){
    switch (action.type){
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "DONE":
            return {
                ...state,
                listProduct: action.payload,
                isLoading: false
            }
        default: 
            return state
    }
}

function Count(prop: PropCount){
    const {name} = useContext(CountContext);
    console.log(name);
    
    // const [count, setCount]= useState(0);
    const [count, dispatch] = useReducer(reducer,0)
    const [count2,dispatch2] = useReducer(reducer2,0);
    const [data, dispatchData] = useReducer(reducerData,initData);

    function handleGetData(){
        // tạo Loading
        dispatchData({type:"LOADING"});

        // call api để dữ liệu
        setTimeout(()=>{
            fetch("http://localhost:3000/product")
                .then(data=>data.json())
                .then(newData=>{
                    dispatchData({type:"DONE",payload: newData})
                })
                .catch(()=>{
                    console.log("lỗi");
                    
                })
        },2000)
    }

    return (
        <>
            <button onClick={handleGetData} className="btn btn-primary">Lấy dữ liệu</button>
            
            {data.isLoading ? 
                <h1>Loading ....</h1> : 
                <div>{<ProductList listData={data.listProduct} onDelete={()=>{}}/>}</div>}

            <div>
                <h1>Count: {count}</h1>
                <button className="btn btn-success" 
                    onClick={() => {dispatch("ADD")}}>
                        Tăng
                </button>
                <button className="btn btn-warning" 
                    onClick={() => {dispatch("DELETE")}}>
                        Giảm
                </button>
                <button className="btn btn-primary" 
                    onClick={() => {dispatch("RESET")}}>Reset</button>
            </div>

            <div>
                <h1>Count '2': {count2}</h1>
                <button className="btn btn-info" onClick={()=>{
                    dispatch2({
                        type: "GAN",
                        payload: 10
                    })
                }
                }>
                        Gán gt
                </button>
            </div>
        </>
    )
}

export default Count;