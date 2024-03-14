import IProduct from "../interfaces/IProduct";

type Props ={
    listData: IProduct[]
}

function ProductList(props: Props){

    console.log(props);
    
    return (
        <ul>
            {
                props.listData.map(item=>{
                    return (
                        <li key={item.id}>{item.id} | {item.name} | {item.price}</li>
                    )
                })
            }
        </ul>
    )
}

export default ProductList;