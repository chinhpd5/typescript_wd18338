// import Gift from "./components/Gift"

import { useEffect, useState } from "react"
import ProductList from "./components/ProductList";
import IProduct from "./interfaces/IProduct";
import { Route, Routes } from "react-router-dom";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";


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

  function updateHandle(id: string, data: IProduct){
    // console.log({id, data});
    fetch(`http://localhost:3000/product/${id}`,{
      method: "PUT",
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(data)
    })
    .then(data=>{
      return data.json();
    })
    .then(newData=>{
      setList(list.map(item=> {
        if(item.id == id)
          return newData;
        else
          return item;
      }))
    })
    .catch(()=>{
      console.log("Có lỗi khi sửa");
      
    })
  }

  return(
    <>
      <Routes>
        <Route path="/" element= { <h1>Trang chủ</h1> } />
        <Route path="/product" element= { <ProductList listData={list} onDelete={deleteHandle} /> } />
        <Route path="/product/add" element ={ <ProductAdd onAdd={addHandle} /> }/>
        <Route path="/product/edit/:id" element={<ProductEdit onEdit={updateHandle} />} />
      </Routes>
    </>
  )
}

export default App
