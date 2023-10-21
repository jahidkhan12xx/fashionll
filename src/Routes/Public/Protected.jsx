import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";


const Protected = ({children}) => {

    const {user,isLoading} = useContext(AuthContext);
    const path = useLocation();
    if(isLoading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
        return  children;
    }


    return (
        <div>
            <Navigate state={path.pathname} to="/login"></Navigate>
        </div>
    );
};

export default Protected;