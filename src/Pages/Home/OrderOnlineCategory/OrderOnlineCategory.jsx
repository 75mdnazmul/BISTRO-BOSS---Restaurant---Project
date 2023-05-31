// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const OrderOnlineCategory = () => {
    return (
        <>
            <SectionTitle
            heading={"ORDER ONLINE"}
            subHeading={"---From 11:00am to 10:00pm---"}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >

                <SwiperSlide>
                    <img src={img1} alt="Slide Image 1" />
                    <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 mb-10 text-slate-900">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Slide Image 2" />
                    <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-200">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="Slide Image 3" />
                    <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-900">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="Slide Image 4" />
                    <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-900">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="Slide Image 5" />
                    <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-900">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="Slide Image 6" />
                    <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-900">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Slide Image 7" />
                    <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-200">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="Slide Image 8" />
                    <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-900">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Slide Image 7" />
                    <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-200">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="Slide Image 10" />
                    <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-900">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default OrderOnlineCategory;