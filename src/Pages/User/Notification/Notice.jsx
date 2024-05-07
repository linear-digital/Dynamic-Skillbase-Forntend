import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { api } from "../../../Components/axios/axios.instance";
import Loader from "../../../Components/Shared/Loader";
import { Card } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons";
export default function Notice() {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ["best performers"],
        queryFn: async () => {
            const response = await api.get("/performer");
            return response.data;
        }
    })
    const { settings } = useSelector((state) => state.user);
    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="w-full mb-10">
            <h1 className="text-center text-3xl font-semibold mt-10">Notification</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{ delay: 2000 }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className=" mt-7 w-full">
                {
                    users?.map(user => {
                        return (
                            <SwiperSlide key={user?._id} className="w-full  py-5">
                                <Card className="w-full px-10 bg-primary lg:h-[220px] relative flex justify-center items-center">
                                    <FontAwesomeIcon icon={faQuoteLeftAlt}
                                        className="text-5xl text-blue-900 absolute left-20 top-10"
                                    />
                                    <p className="text-white z-20 text-center">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente quia rem assumenda, esse quaerat doloremque iusto! Debitis qui atque consectetur eveniet et sit ipsam nesciunt commodi iusto nihil distinctio labore ea rerum veritatis est autem modi similique cumque cum doloremque nisi unde, excepturi fugiat! Aperiam a enim dolorum vel, esse et voluptatum suscipit veniam sapiente saepe cupiditate, voluptatibus sequi rerum, magni modi doloremque culpa quibusdam harum. Sint quaerat consectetur inventore. Nobis reiciendis illo aut unde dolore fugit quisquam ea ipsam aliquam? Quos tempora quas sunt asperiores eum error, mollitia odio officia fuga voluptas sequi fugit debitis possimus nam et.
                                    </p>
                                </Card>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    );
}
