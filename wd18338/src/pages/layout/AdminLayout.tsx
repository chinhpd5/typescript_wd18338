import { Link, Outlet } from "react-router-dom";

function AdminLayout(){
    return(
        <>
        <div className="row">
            <header className="col-2">
                <nav>
                    <ul className=" flex-column navbar navbar-dark bg-primary ">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/admin">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/admin/product">Sản phẩm</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/admin/user">Người dùng</Link>
                        </li>
                    </ul>
                </nav>
            </header> 

            <main className="col-10">
                <Outlet />
            </main>
        </div>
            
        </>
    )
}
export default AdminLayout;