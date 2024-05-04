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
            <Swiper
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                loop={true}
                effect="fade"
                modules={[Pagination, Autoplay, EffectFade]}
                className="mySwiper mt-10 max-w-[600px] lg:min-w-[500px]">
                {
                    settings?.banners?.map((image, index) => (
                        <SwiperSlide key={index} className="w-full rounded">
                            <img
                                src={imageUrl(image.path)}
                                alt=""
                                className="object-cover w-full h-full min-h-[500px] max-h-[500px] rounded "
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
