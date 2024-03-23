// import Gift from "./components/Gift"

import { useEffect, useState } from "react"
import ProductList from "./components/Product/ProductList";
import IProduct from "./interfaces/IProduct";
import { Route, Routes } from "react-router-dom";
import IUser from "./interfaces/IUser";
import ProductAdd from "./components/Product/ProductAdd";
import ProductEdit from "./components/Product/ProductEdit";
import UserList from "./components/User/UserList";
import UserAdd from "./components/User/UserAdd";
import Count from "./components/Count";



function App() {
  const [list,setList]= useState<IProduct[]>([]);
  const [listUser,setListUser]= useState<IUser[]>([]);

  useEffect(()=>{
    fetch('http://localhost:3000/product')
      .then(data => {
        return data.json();
      })
      .then(data =>{
        setList(data)
      })

      // user
      fetch('http://localhost:3000/users')
        .then(res=> res.json())
        .then(res=> {
          setListUser(res);
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

  function deleteUserHandle(id: string){
    if(id){
      fetch(`http://localhost:3000/users/${id}`,{
        method: "DELETE"
      })
        .then(res=> res.json())
        .then(res=> {
          const newList = listUser.filter(user=>{
            return user.id != res.id;
          })
          setListUser(newList);
        })
        .catch(()=>{
          console.log("Xóa lỗi");
          
        })

    }
    
  }

  function handleAddUser(data: IUser){
    // console.log(data);
    fetch('http://localhost:3000/users',{
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(data)
    })
      .then(res=> res.json())
      .then(res=> setListUser([...listUser,res]))
      .catch(()=>{
        console.log("Thêm lỗi");
      })
  }

  
  return(
    <>
      <Routes>
        <Route path="/" element= { <h1>Trang chủ</h1> } />
        <Route path="/product">
          <Route path="" element= { <ProductList listData={list} onDelete={deleteHandle} /> } />
          <Route path="add" element ={ <ProductAdd onAdd={addHandle} /> }/>
          <Route path="edit/:id" element={<ProductEdit onEdit={updateHandle} />} />
        </Route>
        <Route path="/user">
          <Route path="" element={<UserList userList={listUser} onDelete={deleteUserHandle}/>} />
          <Route path="add" element={<UserAdd onAdd={handleAddUser}/>} />
        </Route>
        <Route path="/count" element={<Count />}/>
      
        {/* <Route path="/product" element= { <ProductList listData={list} onDelete={deleteHandle} /> } />
        <Route path="/product/add" element ={ <ProductAdd onAdd={addHandle} /> }/>
        <Route path="/product/edit/:id" element={<ProductEdit onEdit={updateHandle} />} /> */}
      </Routes>
    </>
  )
}

export default App
