// import Gift from "./components/Gift"

import { useEffect, useState } from "react"
import ProductList from "./components/ProductList";


function App() {
  const [list,setList]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/product')
      .then(data => {
        return data.json();
      })
      .then(data =>{
        setList(data)
        
      })
    
  },[])

  return(
    <>
      <ProductList listData={list} />
    </>
  )
}

export default App
