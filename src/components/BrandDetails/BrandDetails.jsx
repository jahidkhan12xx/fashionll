import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SingleBrandDetails from "../SingleBrandDetails/SingleBrandDetails";


const BrandDetails = () => {

    const [specific,setSpecific] = useState([]);

    const addedData = useLoaderData();
    const {id} = useParams();

    useEffect(()=>{
        const filteredData = addedData.filter(item=> item.brand == id);
        setSpecific(filteredData);

    },[addedData,id])
    console.log(addedData,specific);
    return (
        <div>
           {
            specific.length > 0 ? 
            <div>

<Swiper 
      // install Swiper modules
      spaceBetween={10}
        centeredSlides={true}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
      {specific.map((item,idx)=> <SwiperSlide key={idx}>
        <img className=" h-[60vh] w-[70vw]" src={item.url} alt="" />
      </SwiperSlide>)}
      
    </Swiper>
    <div className=" grid container mx-auto grid-cols-1 md:grid-cols-2 gap-5 my-24">
    {
        specific.map((singleBrand,idx) => <SingleBrandDetails key={idx} singleBrand={singleBrand}></SingleBrandDetails>)
    }
    </div>
            </div>
            :
            <div>

              <h2 className=" text-4xl font-bold text-center min-h-[80vh] flex justify-center items-center">Not available</h2>
            </div>
           }
        </div>
    );
};

export default BrandDetails;