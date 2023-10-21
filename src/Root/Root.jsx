import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Sticky from "react-stickynode";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            
            <NavBar></NavBar>
           
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;