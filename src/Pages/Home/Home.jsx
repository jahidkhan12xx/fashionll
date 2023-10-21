import Banner from "../../components/Banner/Banner";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import OurBrands from "../../components/OurBrands/OurBrands";
import OurGallery from "../../components/OurGallery/OurGallery";



const Home = () => {

    
    return (
        <div>
           
            <Banner></Banner>
            <OurBrands></OurBrands>
            <OurGallery></OurGallery>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;