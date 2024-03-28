// import Gift from "./components/Gift"

import { useEffect, useReducer, useState } from "react"
import ProductList from "./components/Product/ProductList";
import IProduct from "./interfaces/IProduct";
import { Route, Routes } from "react-router-dom";
import IUser from "./interfaces/IUser";
import ProductAdd from "./components/Product/ProductAdd";
import ProductEdit from "./components/Product/ProductEdit";
import UserList from "./components/User/UserList";
import UserAdd from "./components/User/UserAdd";
import Count from "./components/Count";

// giá trị khởi tạo cho listProduct
const initProduct={
  data : [] as IProduct[],
}

// biến action.type
const SET_DATA = 'set_data';
const ADD_DATA = 'add_data';
const EDIT_DATA = 'edit_data';
const DELETE_DATA ='delete_data';


function reducerProduct(state:any, action:any){
  switch(action.type){
    case SET_DATA:
      return {
        ...state,
        data : action.payload
      };
    case ADD_DATA:
      return {
        ...state,
        data : [...state.data, action.payload]
      };
    case EDIT_DATA:
      return {
        ...state,
        data : state.data.map((item: IProduct)=>{
          if(item.id == action.payload.id)
            return action.payload;
          else
            return item;
        })
      };
    case DELETE_DATA:
      return {
        ...state,
        data : state.data.filter((item: IProduct)=>{
          return item.id != action.payload.id;
        })
      };
    default: 
      return state;
  }
}

function App() {
  // const [list,setList]= useState<IProduct[]>([]);
  const [listProduct,dispatchProduct] = useReducer(reducerProduct,initProduct)
  const [listUser,setListUser]= useState<IUser[]>([]);

  useEffect(()=>{
    fetch('http://localhost:3000/product')
      .then(data => {
        return data.json();
      })
      .then(data =>{
        // setList(data)
        dispatchProduct({type: SET_DATA, payload: data})
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
      // setList(list.filter(item => item.id != data.id));
      dispatchProduct({type: DELETE_DATA, payload: data})
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
      // setList([...list,newData]);
      dispatchProduct({type: ADD_DATA, payload: newData})
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
      // setList(list.map(item=> {
      //   if(item.id == id)
      //     return newData;
      //   else
      //     return item;
      // }))
      dispatchProduct({type: EDIT_DATA, payload: newData})
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
          <Route path="" element= { <ProductList /> } />
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
