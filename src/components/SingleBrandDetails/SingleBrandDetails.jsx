
import { useContext } from 'react';
import { GrView , GrUpdate, GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';
import toast, { Toaster } from 'react-hot-toast';

const SingleBrandDetails = ({singleBrand}) => {

  const {user} = useContext(AuthContext);
  const user_email = user?.email;

  const {name,des,price,rating,type,brand,url} = singleBrand;

  const cartProduct = {user_email,name,des,price,rating,type,brand,url};

  const handleAddToCart = () =>{
    fetch("http://localhost:3000/cart",
    {
      method:"POST",
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify(cartProduct)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
      toast('Good Job! Added To Cart', {
        icon: '👏',
      });
    })
  }
    console.log(singleBrand);
    return (
        <div>
          <div><Toaster
  position="top-right"
  reverseOrder={true}
/></div>
            <div className="card card-side bg-base-100 shadow-2xl flex justify-center items-center gap-3">
  <figure><img className=" w-96 h-60" src={singleBrand.url} alt="Movie"/></figure>
  <div className=" flex">
   <div>
   <h2 className="card-title mb-2">{singleBrand.name}</h2>
    <p>{singleBrand.des}</p>
    <p className=' text-sm font-bold mt-2'>Type : <span className=' uppercase'>{singleBrand.type}</span></p>
    <p className=' text-sm font-bold'>Price : {singleBrand.price} $</p>
   </div>
    <div className="card-actions">
    <div className="btn-group btn-group-vertical gap-1">
  <Link to={`/view/${singleBrand._id}`}><button className=" px-3 py-2 hover:scale-125  transition-all duration-500"><GrView className=' text-2xl bg-white'></GrView></button></Link>
  <Link to={`/update/${singleBrand._id}`}><button className=" px-3 py-2 hover:scale-125  transition-all duration-500"><GrUpdate className=' text-2xl  bg-white'></GrUpdate></button></Link>
  <button onClick={handleAddToCart} className=" px-3 py-2 hover:scale-125  transition-all duration-500"><GrCart className=' text-2xl  bg-white'></GrCart></button>
  
</div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleBrandDetails;