import { Link } from "react-router-dom"
import IUser from "../../interfaces/IUser"

type PropList={
    userList: IUser[],
    onDelete: (id:string) => void
}

function UserList(prop: PropList){
    
    return(
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    prop.userList.map(user=>{
                        return (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.fisrtName} {user.lastName}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <Link className="btn btn-warning mx-3" to={`/user/edit/${user.id}`}>Sửa</Link>
                                    <button onClick={()=>{prop.onDelete(user.id!)}} className="btn btn-danger">Xóa</button>
                                </td>
                            </tr>
                        )
                    })
                }

                
                
            </tbody>
        </table>

    )
}

export default UserList