import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";


const Register = () => {
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const {signUp,profileData} = useContext(AuthContext);
    
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;
        const newUser = {name,email,password,url};
        console.log(newUser);

        if(password.length<6){
            return toast.error("Password must have 6 characters")
        }
        else if(!/^(?=.*[A-Z])(?=.*[\W_]).+$/.test(password)){
            return toast.error("Password must contains a Capital letter and a special character")
        }

        else{
            signUp(email,password)
            .then(() => {
             
                profileData(name,url).then().catch();
                toast.success("User created successfully");
                location.reload();
                
                
             
            })
            .catch(err=>{
                console.log(err.code);
                setError(err.code)
                toast.error(`${error}`)
                
            })
           
            navigate("/")
        }



    }
    return (
        <div>
            <div><Toaster
  position="top-right"
  reverseOrder={false}
/></div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name="url" type="text" placeholder="url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
          <div className="label-text-alt flex gap-6">
                <span>Already have an account?</span>
                <Link to="/login"><span className=" text-blue-800 underline">Login</span></Link>
            </div>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Register"></input>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;