import { Link } from "react-router-dom";
import IProduct from "../../interfaces/IProduct";
import { useContext, useEffect } from "react";
import { DELETE_DATA, ProductContext, SET_DATA } from "../../context/ProductProvide";

type Props ={
    // listData: IProduct[],
    // onDelete: (id: string) => void
}

function ProductList(props: Props){
    const {listProduct,dispatchProduct} = useContext(ProductContext);

    useEffect(()=>{
        fetch('http://localhost:3000/product')
          .then(data => {
            return data.json();
          })
          .then(data =>{
            // setList(data)
            dispatchProduct({type: SET_DATA, payload: data})
          })
    
    },[])

    function handleDelelte(id: string){
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

    return (
        <>
            <Link to="/product/add">Thêm mới sản phẩm</Link>
            <ul>
                {
                    listProduct.data.map((item: IProduct)=>{
                        return (
                            <li key={item.id}>
                                {item.id} | {item.name} | {item.price}
                                <Link className="btn btn-warning mx-3" to={`/product/edit/${item.id}`} >Sửa</Link>
                                <button className="btn btn-danger" onClick={()=>{handleDelelte(item.id!)}}>Xóa</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ProductList;