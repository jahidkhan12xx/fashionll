import { Link } from "react-router-dom";


const BrandLogo = ({brandData}) => {

    console.log(brandData);

    return (
        <div>
           <Link to={`/brands/${brandData.name.toLowerCase()}`}>
           <div className="card w-full h-full bg-base-100  shadow-2xl rounded-none flex justify-center items-center">
  
  <figure><img className=" w-full h-56 flex justify-center items-center"  src={brandData.image} alt="Shoes" /></figure>
  
</div></Link>
        </div>
    );
};

export default BrandLogo;