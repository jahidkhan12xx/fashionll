import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import { FaGoogle } from "react-icons/fa";


const Login = () => {

    const {signIn,googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const path = useLocation();

    const handleGoogleSignIn = () =>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
            navigate(path?.state? path.state : "/")
        })
        .catch(err=>{
            console.log(err.code);
        })
    }
    const handleLogin = e =>{
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

            signIn(email,password)
            .then(res=>{
                console.log(res.user);
                toast.success("Successfully Login")
                navigate(path?.state? path.state : "/")

                
            })
            .catch(err=>{
                console.log(err.message);
                toast.error("Password/Email doesn't match")
            })
        



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
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
                <span>Do not  have an account?</span>
                <Link to="/register"><span className=" text-blue-800 underline">Register</span></Link>
            </div>
          </label>
        </div>
        <div className="form-control mt-6">
        <div className="flex flex-col w-full">
  <div className="grid card rounded-box"><input type="submit" className="btn btn-primary" value="Login"></input></div> 
  <div className="divider"></div> 
  <div className="grid card rounded-box place-items-center "><button onClick={handleGoogleSignIn} className="btn btn-secondary bg-purple-800 text-white hover:bg-white hover:text-purple-800" ><FaGoogle></FaGoogle>Login With google</button></div>
</div>
          
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;