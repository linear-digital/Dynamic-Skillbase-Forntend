import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { useSelector } from "react-redux";
import { imageUrl } from "../../../../Components/Shared/imageUrl";
export default function Slider() {
    const { settings } = useSelector((state) => state.user);
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold mt-10"> Daily Best Performers</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{ delay: 3000 }}
                loop={true}
                effect="fade"
                modules={[Pagination, Autoplay, EffectFade]}
                className="mySwiper mt-10 w-full">
                <SwiperSlide >
                    
                </SwiperSlide>
                <SwiperSlide >
                    2
                </SwiperSlide>
                <SwiperSlide >
                    3
                </SwiperSlide>
                <SwiperSlide >
                    4
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
