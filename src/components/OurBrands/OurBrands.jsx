import { useLoaderData } from "react-router-dom";
import BrandLogo from "../BrandLogo/BrandLogo";


const OurBrands = () => {

    const brandsData = useLoaderData();
    console.log(brandsData);
    return (
        <div className=" mx-auto container mb-44">
            <h2 className=" text-4xl font-bold border-l-8 border-black px-3 mx-auto container mb-16">Our <span className="text-red-800">Brands</span></h2>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-1">
                {
                    brandsData.map(brandData=> <BrandLogo key={brandData.id} brandData={brandData}></BrandLogo>)
                }
            </div>
        </div>
    );
};

export default OurBrands;