// import Gift from "./components/Gift"

import { useEffect, useState } from "react"
import ProductList from "./components/ProductList";
import IProduct from "./interfaces/IProduct";


function App() {
  const [list,setList]= useState<IProduct[]>([]);

  useEffect(()=>{
    fetch('http://localhost:3000/product')
      .then(data => {
        return data.json();
      })
      .then(data =>{
        setList(data)
      })
    
  },[])

  function deleteHandle(id: string){
    fetch(`http://localhost:3000/product/${id}`,{
      method: "DELETE",
    })
    .then((data)=>{
      return data.json();
    })
    .then(data=>{
      setList(list.filter(item => item.id != data.id));
    })
    .catch(()=>{
      console.log("xóa lỗi");
      
    })
    
  }

  return(
    <>
      <ProductList listData={list} onDelete={deleteHandle} />
    </>
  )
}

export default App
