import { useLoaderData } from "react-router-dom";
import CartData from "../../components/CartData/CartData";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Provider";


const Cart = () => {
    const {user} = useContext(AuthContext);
    const cartData = useLoaderData();

    

    const [modidiedData,setModiifiedData] = useState([]);
   console.log(user.email);

    useEffect(()=>{
        const userAdd = cartData.filter(item => item.user_email == user.email);
        setModiifiedData(userAdd)
    },[cartData,user.email])
    
    console.log(cartData);
    return (
        <div className=" container mx-auto my-4">
            {
                !cartData? <div>


                    <h2 className=" text-center text-5xl font-bold flex justify-center">You don&#39;t Add anything </h2>
                </div> : <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">

                    {
                        modidiedData.map((item,idx)=> <CartData key={idx} item={item} modidiedData={modidiedData} setModiifiedData={setModiifiedData}></CartData> )
                    }
                </div>
            }
        </div>
    );
};

export default Cart;