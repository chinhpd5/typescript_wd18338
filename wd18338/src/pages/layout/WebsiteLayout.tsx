import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function WebsiteLayout(){

    const [user,setUser] = useState(sessionStorage.getItem('user'))
    
    return(
        <>
            <header>
            <nav className="navbar navbar-expand-lg bg-success navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="">Trang chủ</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/product">Sản phẩm</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="contact">Liên hệ</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav me-3">

                            {
                                user ?
                                <>
                                    <li className="nav-item">
                                        <span className="nav-link active">Xin chào {user}</span>
                                    </li>
                                </> 
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/signup">Đăng kí</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/signin">Đăng nhập</Link>
                                    </li>
                                </>
                            }
                           
                        </ul>

                    </div>
                </div>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}

export default WebsiteLayout;