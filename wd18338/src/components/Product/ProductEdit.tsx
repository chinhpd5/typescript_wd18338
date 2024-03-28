import { useForm } from "react-hook-form";
import IProduct from "../../interfaces/IProduct";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { EDIT_DATA, ProductContext } from "../../context/ProductProvide";

// type PropEdit ={
//     onEdit: (id: string, data: IProduct) => void
// }

type Input ={
    name: string,
    price: number
}

function ProductEdit(){
    const {dispatchProduct} = useContext(ProductContext);
    const {id} = useParams();
    const navigate = useNavigate();
    // console.log(id);
    
    const {
        register,
        handleSubmit,
        reset
    }= useForm<Input>();

    useEffect(()=>{
        fetch(`http://localhost:3000/product/${id}`)
            .then(data=>{
                return data.json();
            })
            .then(newdata=>{
                reset(newdata)
            })
    },[]);

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
          
          dispatchProduct({type: EDIT_DATA, payload: newData})
        })
        .catch(()=>{
          console.log("Có lỗi khi sửa");
          
        })
    }

    function onSubmit(data: Input){
        // console.log(data);
        // props.onEdit(id!, data)
        updateHandle(id!,data);
        navigate("/product");
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Tên sản phẩm</label>
            <input type="text" {...register("name") } />
            <label htmlFor="">Giá</label>
            <input type="number" {...register("price") } />
            <button type="submit">Gửi</button>
        </form>
    )
}

export default ProductEdit;