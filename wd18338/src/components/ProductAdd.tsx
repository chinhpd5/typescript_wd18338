import IProduct from "../interfaces/IProduct";

type PropAdd={
    onAdd: (data: IProduct)=> void;
}


function ProductAdd(prop: PropAdd){


    return (
        <>
            <form action="">
                <label htmlFor="">Tên sản phẩm</label>
                <input type="text" />
                <label htmlFor="">Giá</label>
                <input type="bumber" />
                <button type="submit">Gửi</button>
            </form>
        </>
    )
}

export default ProductAdd;