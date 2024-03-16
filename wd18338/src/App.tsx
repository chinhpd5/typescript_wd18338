// import Gift from "./components/Gift"

import { useEffect, useState } from "react"
import ProductList from "./components/ProductList";
import IProduct from "./interfaces/IProduct";
import { Route, Routes } from "react-router-dom";
import ProductAdd from "./components/ProductAdd";


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

  function addHandle(data: IProduct){
    fetch('http://localhost:3000/product/',{
      method: "POST",
      headers:{
        'Content-Type': "Application/json"
      },
      body: JSON.stringify(data)
    })
    .then(newData=>{
      return newData.json();
    })
    .then(newData=>{
      setList([...list,newData]);
    })
    .catch(()=>{
      console.log("có lỗi khi thêm");
      
    })
    
  }

  return(
    <>
      <Routes>
        <Route path="/" element= { <h1>Trang chủ</h1> } />
        <Route path="/product" element= { <ProductList listData={list} onDelete={deleteHandle} /> } />
        <Route path="/product/add" element ={ <ProductAdd onAdd={addHandle} /> }/>
      </Routes>
    </>
  )
}

export default App
