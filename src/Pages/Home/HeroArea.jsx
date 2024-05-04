import React from 'react';
import Logo from '../../Components/Brand/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Lady from './hero-image.png'
const HeroArea = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <div className='min-h-[90vh] flex items-center  p-4 lg:p-4 hero-bg'

        >
            <div className="text-white lg:grid grid-cols-12 lg:mt-20 mt-24 container mx-auto">
                <div className='col-span-7'>
                    <h3 className='text-2xl uppercase text-primary font-semibold'>
                        Education Solution
                    </h3>
                    <h1 className="lg:text-5xl text-2xl   font-semibold mt-5 text-black"
                        style={{ lineHeight: '1.2' }}
                    >
                        Better Learning Feature Starts With Dynamic Skillbase
                    </h1>
                    <p className="lg:py-6 py-4 lg:w-[80%] w-full text-xs lg:text-sm leading-normal text-blue-gray-700">
                        It's a Bangladeshi trusted online platform. It is a learning and earning process by using your valuable free time at home through your smart phone only It is a very easy process and you can learn this process on your own mother tongue and you can earn from our community with selling some Courses Services or product also. Here you make your career smoothly.
                    </p>
                    <div className="flex gap-5">
                        <Link to={'/signup'} className="btn btn-primary px-6">
                            Explore Courses
                        </Link>
                    </div>
                </div>
                <div className='col-span-5'>
                    <img src={Lady} alt="" />
                </div>
            </div>
        </div >
    );
};

export default HeroArea;