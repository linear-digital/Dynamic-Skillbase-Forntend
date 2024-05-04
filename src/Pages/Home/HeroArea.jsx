import React from 'react';
import Logo from '../../Components/Brand/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from '../../redux/features/user/userSlice';

const HeroArea = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <div className='min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat p-4 lg:p-4'
            style={{
                backgroundImage: `url('/images/bg/hero-bg.jpg')`,
            }}
        >
            <div className="text-white lg:grid grid-cols-12 container mx-auto">
                <div className='col-span-7'>
                    <div className='ml-[-10px]'>
                        <Logo width={"lg:max-w-[250px] max-w-[150px]"} />
                    </div>
                    <h1 className="lg:text-5xl text-2xl leading-tight font-bold">
                        WELCOME TO LIFE CHANGE BD E-LEARNING PLATFORM
                    </h1>
                    <p className="lg:py-6 py-4 lg:w-[80%] w-full text-xs lg:text-sm leading-normal">
                        It's a Bangladeshi trusted online platform. It is a learning and earning process by using your valuable free time at home through your smart phone only It is a very easy process and you can learn this process on your own mother tongue and you can earn from our community with selling some Courses Services or product also. Here you make your career smoothly.
                    </p>
                    <div className="flex gap-5">
                        <Link to={user ? '/user' : '/login'} className="btn btn-primary btn-outline px-7">
                            {user ? 'Dashboard' : 'Login'}
                        </Link>
                        {
                            user ?
                                <button onClick={() => dispatch(logOutUser())} className="btn btn-primary btn-outline px-6" >
                                    LogOut
                                </button>
                                :
                                <Link to={'/signup'} className="btn btn-primary btn-outline px-6">
                                    Sign Up
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeroArea;