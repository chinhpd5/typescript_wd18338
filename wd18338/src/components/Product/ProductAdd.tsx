import { useForm } from "react-hook-form";
import IProduct from "../../interfaces/IProduct";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ADD_DATA, ProductContext } from "../../context/ProductProvide";

// type PropAdd={
//     onAdd: (data: IProduct)=> void;
// }

//kiểu nhận lại trong form thêm mới
type Input ={
    name: string,
    price: number
}


function ProductAdd(){
    const {dispatchProduct} = useContext(ProductContext);

    // hooks giúp điều hướng trang
    const navigate = useNavigate()

    // hooks làm việc với form
    const { 
        register, // gán name của thẻ input
        handleSubmit // nhận giá trị khi submit form
    } = useForm<Input>() // <Input> kiểu dữ liệu trong form

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

    const onSubmit = (data: Input) => {// data là giá trị nhận lại khi submit
        // prop.onAdd(data);// chuyển data sang prop.onAdd của App.tsx
        addHandle(data)
        navigate('/product'); // điều hướng về trang danh sách
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Tên sản phẩm</label>
                <input type="text" {...register("name") } />
                <label htmlFor="">Giá</label>
                <input type="number" {...register("price") } />
                <button type="submit">Gửi</button>
            </form>
        </>
    )
}

export default ProductAdd;