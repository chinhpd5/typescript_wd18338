import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type PropAdd={
    onAdd: (data: Input)=> void
}
type Input={
    fisrtName: string,
    lastName: string,
    age: number,
    email: string,
    gender: string
}

function UserAdd(prop: PropAdd){
    const navigate = useNavigate();
    const { register, handleSubmit,formState: { errors }} = useForm<Input>()

    const onSubmit =(data:Input)=>{
        prop.onAdd(data);
        navigate('/user');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* firstName */}
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">firstName</label>
                <input 
                {...register(
                    "fisrtName",
                    {
                        required: "Không được để trống first name",
                        minLength : {
                            value: 2,
                            message: "Tối thiểu cần 2 kí tự"
                        }
                    }
                    )
                } 
                type="text" className="form-control" id="firstName"/>
                {errors.fisrtName && <span style={{color: "red"}}>{errors.fisrtName?.message}</span>} 
            </div>

            {/* lastName */}
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">lastName</label>
                <input  {...register(
                    "lastName",
                    {
                        required:"Không được để trống lastName",
                        maxLength : {
                            value: 10,
                            message: "Tối đa được 20 kí tự"
                        }
                    }
                )} type="text" className="form-control" id="lastName"/>
                {errors.lastName && <span style={{color: "red"}}>{errors.lastName?.message}</span>} 
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">age</label>
                <input  {...register(
                    "age",
                    {
                        min: {
                            value: 1,
                            message: "Tuổi tối thiểu là 1"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: "This input is number.",
                        },
                    }
                )} type="text" className="form-control" id="age"/>
                {errors.age && <span style={{color: "red"}}>{errors.age?.message}</span>} 

            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">email</label>
                <input {...register(
                    "email",
                    {
                        pattern: {
                            value: /^\S+@\S+\.\S+$/, //regex email
                            message: "This input is not email.",
                        },
                    }
                    )} type="text" className="form-control" id="email"/>
                {errors.email && <span style={{color: "red"}}>{errors.email?.message}</span>} 

            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">gender</label>
                <input  {...register("gender")} type="text" className="form-control" id="gender"/>
            </div>
           
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )

}

export default UserAdd;