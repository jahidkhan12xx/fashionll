import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import toast, { Toaster } from "react-hot-toast";
import { FaUserEdit } from "react-icons/fa";




const NavBar = () => {

  const {user,LogOut} = useContext(AuthContext)

  const handleOut = () =>{
    LogOut()
    .then(res=>{
      toast.success("LogOut Success")
    })
    .catch(err=>{
      console.log(err);
    })
  }

    const links = <>

                <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-black  text-red-800 px-3 py-2 border-b-2 transition-border duration-100 border-red-800" : " px-3 py-2  hover:border-b-2 hover:border-r-0 hover:font-black text-red-800 transition-border duration-100 border-red-800"
                }
                >
                Home
                </NavLink>
                
                <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-black  text-red-800 px-3 py-2 border-b-2 transition-border duration-100 border-red-800" : " px-3 py-2  hover:border-b-2 hover:border-r-0 hover:font-black text-red-800 transition-border duration-100 border-red-800"
                }
                >
                Add Product
                </NavLink>
                <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-black  text-red-800 px-3 py-2 border-b-2 transition-border duration-100 border-red-800" : " px-3 py-2  hover:border-b-2 hover:border-r-0 hover:font-black text-red-800 transition-border duration-100 border-red-800"
                }
                >
                Cart
                </NavLink>
    </>
    return (
      
        <div>
          <div><Toaster
  position="top-right"
  reverseOrder={false}
/></div>
          
            <div className="navbar bg-base-100  border-gray-500 py-5 shadow-lg  md:px-40">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
    <ul className="menu menu-horizontal lg:block hidden px-1 gap-3">
      {links}
    </ul>
    
  </div>
  <div className="navbar-center lg:flex">
  <a className=" text-3xl uppercase font-bold border-r-4 px-4 border-red-800 ">Fiber <span className=" text-red-800">Life</span></a>
  </div>
  <div className="navbar-end">
  {
    user ? 
    // if user logged in
    <div className=" flex justify-center items-center gap-5">
      <div>
        <h2 >
          {user?.displayName? user.displayName : user.email}
        </h2>
      </div>
      <div>
      <div className="avatar">
  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    {
      user?.photoURL ? <img src={user.photoURL} /> : <FaUserEdit className=" text-4xl ml-1"></FaUserEdit>
    }
    
  </div>
</div>
        
      </div>
      <div><button
                onClick={handleOut}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-black  text-red-800 px-3 py-2 hover:border-b-2 transition-border duration-100 border-red-800" : " px-3 py-2  hover:border-b-2 hover:border-r-0 hover:font-black text-red-800 transition-border duration-100 border-red-800"
                }
                >
                LogOut
                </button></div>
    </div>
    :
    // if user not logged in
    <div>
      <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-black  text-red-800 px-3 py-2 border-b-2 transition-border duration-100 border-red-800" : " px-3 py-2  hover:border-b-2 hover:border-r-0 hover:font-black text-red-800 transition-border duration-100 border-red-800"
                }
                >
                LogIn
                </NavLink>
    </div>
  }
  </div>
</div>
        </div>
    );
};

export default NavBar;