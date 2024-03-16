import { Link } from "react-router-dom";
import IProduct from "../interfaces/IProduct";

type Props ={
    listData: IProduct[],
    onDelete: (id: string) => void
}

function ProductList(props: Props){

    // console.log(props);
    
    return (
        <>
            <Link to="/product/add">Thêm mới sản phẩm</Link>
            <ul>
                {
                    props.listData.map(item=>{
                        return (
                            <li key={item.id}>
                                {item.id} | {item.name} | {item.price}
                                <button onClick={()=>{props.onDelete(item.id!)}}>Xóa</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ProductList;